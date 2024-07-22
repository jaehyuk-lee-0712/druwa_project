import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const BoardEdit = () => {
  const { id } = useParams(); // URL에서 ID 가져오기
  const navigate = useNavigate();
  const [board, setBoard] = useState({
    boardTitle: "",
    boardConts: "",
    boardAuthor: { youName: "" },
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBoard = async () => {
      if (id) {
        // ID가 존재할 때만 요청을 보냅니다.
        try {
          const response = await axios.get(`/BoardWrite/${id}`);
          setBoard(response.data);
        } catch (error) {
          console.error("Error fetching board for edit:", error);
          setError("게시물을 가져오는 데 문제가 발생했습니다.");
        } finally {
          setLoading(false);
        }
      } else {
        // ID가 없는 경우 기본 상태로 페이지 로드
        setLoading(false);
      }
    };
    fetchBoard();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBoard((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatePayload = id
      ? { id, ...board } // ID가 있을 경우 기존 방식
      : { filter: { boardTitle: board.boardTitle }, update: board }; // ID가 없을 경우 필터 기반 업데이트

    try {
      await axios.put(`/BoardWrite${id ? "/" + id : ""}`, updatePayload);
      navigate(`/BoardWrite/${id}`); // 수정 완료 후 게시물 페이지로 리다이렉트
    } catch (error) {
      console.error("Error updating board:", error);
      setError("게시물을 업데이트하는 데 문제가 발생했습니다.");
    }
  };

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="board-edit container">
      <h1>게시물 수정</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="boardTitle">제목</label>
          <input
            type="text"
            id="boardTitle"
            name="boardTitle"
            value={board.boardTitle}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="boardConts">내용</label>
          <textarea
            id="boardConts"
            name="boardConts"
            value={board.boardConts}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">수정하기</button>
      </form>
    </div>
  );
};

export default BoardEdit;
