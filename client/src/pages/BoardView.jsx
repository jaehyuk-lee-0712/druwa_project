import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const BoardView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const [board, setBoard] = useState(location.state?.board || null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchBoard = async () => {
      try {
        // 게시물 조회수 증가 요청
        await axios.post(
          `http://localhost:9000/boardview/${id}`,
          {},
          { withCredentials: true }
        );

        // 게시물 데이터 가져오기
        const response = await axios.get(
          `http://localhost:9000/boardwrite/${id}`,
          { withCredentials: true }
        );
        setBoard(response.data);
      } catch (error) {
        console.error("게시물 가져오기 오류:", error);
      }
    };

    fetchBoard();

    // 현재 사용자 정보 가져오기
    axios
      .get("http://localhost:9000/currentUser", { withCredentials: true })
      .then((response) => {
        setCurrentUser(response.data);
      })
      .catch((error) => {
        console.error("현재 사용자 가져오기 오류:", error);
      });
  }, [id]);

  if (!board) {
    return <div>게시물 데이터를 찾을 수 없습니다.</div>;
  }

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:9000/boardwrite/${board._id}`, {
        withCredentials: true,
      });
      alert("게시물이 삭제되었습니다.");
      navigate("/board"); // 삭제 후 게시판 목록으로 이동
    } catch (error) {
      console.error("게시물 삭제 오류:", error);
      alert("게시물을 삭제하는 데 문제가 발생했습니다.");
    }
  };

  const isAuthor = currentUser && currentUser.userId === board.boardAuthor._id;

  return (
    <div className="board-view container">
      <div className="board-header">
        <h1 className="board-title">{board.boardTitle}</h1>
        <div className="board-meta">
          <div>
            <span className="board-author">
              작성자: {board.boardAuthor.userName}
            </span>
            <span className="board-views">조회수: {board.boardViews}</span>
          </div>
          <div className="board-date">
            <span>
              등록일: {new Date(board.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
      <div className="board-content">
        <div dangerouslySetInnerHTML={{ __html: board.boardConts }} />
      </div>
      <div className="board-footer">
        {isAuthor && (
          <>
            <Link to={`/boardedit/${board._id}`} className="back-link">
              수정
            </Link>
            <button onClick={handleDelete}>
              <Link className="back-link">삭제</Link>
            </button>
          </>
        )}
        <Link to="/board" className="back-link">
          목록
        </Link>
      </div>
    </div>
  );
};

export default BoardView;
