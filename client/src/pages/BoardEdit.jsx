import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

const BoardEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [board, setBoard] = useState({
    boardTitle: "",
    boardConts: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBoard = async () => {
      if (id) {
        try {
          const response = await axios.get(
            `http://localhost:9000/boardwrite/${id}`
          );
          setBoard(response.data);
        } catch (error) {
          console.error("Error fetching board for edit:", error);
          setError("게시물을 가져오는 데 문제가 발생했습니다.");
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };
    fetchBoard();
  }, [id]);

  const handleChange = (value) => {
    setBoard((prevState) => ({
      ...prevState,
      boardConts: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!id) {
      setError("유효한 게시물 ID가 필요합니다.");
      return;
    }

    try {
      await axios.put(`http://localhost:9000/boardwrite/${id}`, board);
      alert("게시물이 수정되었습니다.");
      navigate(`/board`);
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
            onChange={(e) =>
              setBoard((prevState) => ({
                ...prevState,
                boardTitle: e.target.value,
              }))
            }
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="boardConts">내용</label>
          <ReactQuill
            value={board.boardConts}
            modules={modules}
            formats={formats}
            onChange={handleChange}
          />
        </div>
        <div className="btn">
          <button type="submit">수정하기</button>
        </div>
      </form>
    </div>
  );
};

export default BoardEdit;
