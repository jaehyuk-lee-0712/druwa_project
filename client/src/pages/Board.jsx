import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Board = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/Board", {
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // 데이터를 확인하기 위해 콘솔 로그를 남깁니다.
        setBoards(data);
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <section className="board__top container">
      <div className="board__text">
        <h2>게시판</h2>
      </div>
      <div className="board__cate">
        <div className="board__menu">
          <Link to="/boardwrite">글쓰기</Link>
        </div>
        <div className="board__search">
          <div className="search__icon"></div>
          <input
            type="search"
            placeholder="검색어를 입력하세요."
            className="board__search__input"
          />
        </div>
      </div>
      {/* 게시판 리스트 */}
      <div className="board__list">
        <ul>
          {boards.map((val, key) => (
            <li key={val._id} className="board__list__box">
              <div className="board__list__cont">
                <div className="list__cont__type">{key + 1}</div>
                <Link
                  to={`/boardview/${val._id}`} // 게시물 ID를 URL에 포함
                  className="list__cont__title"
                >
                  {val.boardTitle}
                </Link>
                <div className="list__cont__author">
                  {val.boardAuthor
                    ? val.boardAuthor.userName
                    : "Unknown Author"}
                </div>
                <div className="list__cont__date">
                  {new Date(val.createdAt).toLocaleDateString()}
                </div>
                <div className="list__cont__views">{val.boardView}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* 더보기 버튼 */}
      <div className="board__more__box">
        <div className="board__more">
          <span className="more__text">더보기</span>
          <span className="more__current">10</span>
          <span className="more__total">300</span>
        </div>
      </div>
    </section>
  );
};

export default Board;
