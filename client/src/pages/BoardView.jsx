// BoardView.js
import React from "react";
import { useLocation } from "react-router-dom";

const BoardView = () => {
  const location = useLocation();
  const { board } = location.state || {};

  if (!board) {
    return <div>게시물 데이터를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="board-view container">
      <div className="board-header">
        <h1 className="board-title">{board.boardTitle}</h1>
        <div className="board-meta">
          <div>
            <span className="board-author">
              작성자: {board.boardAuthor.youName}
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
        <a href="/boardedit" className="back-link">
          수정
        </a>
        <a href="/boarddelete" className="back-link">
          삭제
        </a>
        <a href="/board" className="back-link">
          목록
        </a>
      </div>
    </div>
  );
};
export default BoardView;
