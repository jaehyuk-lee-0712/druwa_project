import React, { useState } from "react";
import { Link } from "react-router-dom";

const Board = () => {
  const [activeItem, setActiveItem] = useState("전체");

  // 클릭 이벤트 처리 함수
  const handleClick = (item) => {
    setActiveItem(item);
  };

  // 데이터 불러오기 (실제 데이터 경로에 맞게 수정 필요)
  const { boardList } = require("../data/list"); // 데이터 파일 경로를 정확히 지정해야 합니다.

  // activeItem에 따라 필터링된 리스트 생성
  const filteredList =
    activeItem === "전체"
      ? boardList
      : boardList.filter((item) => item.type === activeItem);

  return (
    <section className="board__top container">
      <div className="board__text">
        <h2>공지사항</h2>
      </div>
      <div className="board__cate">
        <div className="board__menu">
          <li
            className={activeItem === "전체" ? "active" : ""}
            onClick={() => handleClick("전체")}
          >
            <Link to="#">전체</Link>
          </li>
          <li
            className={activeItem === "이벤트" ? "active" : ""}
            onClick={() => handleClick("이벤트")}
          >
            <Link to="#">이벤트</Link>
          </li>
          <li
            className={activeItem === "업데이트" ? "active" : ""}
            onClick={() => handleClick("업데이트")}
          >
            <Link to="#">업데이트</Link>
          </li>
        </div>
        {/* 검색창 */}
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
          {filteredList.map((item, index) => (
            <li key={index} className="board__list__box">
              <div className="board__list__cont">
                <div className="list__cont__type">{item.type}</div>
                <div className="list__cont__title">{item.title}</div>
                <div className="list__cont__date">{item.date}</div>
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
