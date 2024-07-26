import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Board = () => {
  const [boards, setBoards] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // 게시판 목록 가져오기
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

    // 현재 사용자 확인
    axios
      .get("http://localhost:9000/currentUser", { withCredentials: true })
      .then((response) => {
        setCurrentUser(response.data);
      })
      .catch((error) => {
        console.error("현재 사용자 가져오기 오류:", error);
      });
  }, []);

  const handleWriteClick = () => {
    if (!currentUser) {
      alert("로그인 후 글쓰기가 가능합니다.");
      return;
    }
    navigate("/boardwrite"); // 로그인 상태면 글쓰기 페이지로 이동
  };

  return (
    <section className="board__top container">
      <div className="board__text">
        <h2>게시판</h2>
      </div>
      <div className="board__cate">
        <div className="board__menu">
          <button onClick={handleWriteClick} className="write-button">
            글쓰기
          </button>
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
                  to={`/boardView/${val._id}`}
                  className="list__cont__title"
                  state={{ board: val }} // Link에 state로 board 데이터를 전달
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
                <div className="list__cont__views">{val.boardViews}</div>
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
