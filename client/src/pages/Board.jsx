import React from "react";
import { Link } from "react-router-dom";
import BoardList from "../components/BoardList";

const Board = () => {
  return (
    <section className="board__top container">
      <div className="board__text">
        <h2>공지사항</h2>
      </div>
      <div className="board__cate">
        <div className="board__menu">
          <li>
            <Link>전체</Link>
          </li>
          <li>
            <Link>업데이트</Link>
          </li>
          <li>
            <Link>서비스</Link>
          </li>
          <li>
            <Link>이벤트</Link>
          </li>
          <li>
            <Link>작업</Link>
          </li>
          <li>
            <Link>공공기관</Link>
          </li>
          <li>
            <Link>공고</Link>
          </li>
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
      <div className="board__list">
        <BoardList />
      </div>
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
