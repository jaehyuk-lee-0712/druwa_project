import React, { useState } from "react";
import Home from "./Home";
import Login from "./Login";
import Board from "./Board";
import MyPage from "./MyPage";
import Admin from "./Admin";
import List from "./List";
import { Link } from "react-router-dom";

const Test = () => {
  const [currentComponent, setCurrentComponent] = useState("");

  const renderComponent = () => {
    switch (currentComponent) {
      case "Home":
        return <Home />;
      case "Login":
        return <Login />;
      case "Admin":
        return <Admin />;
      case "List":
        return <List />;
      case "Board":
        return <Board />;
      case "MyPage":
        return <MyPage />;
      default:
        return <Home />;
    }
  };

  return (
    <section id="wrap">
      <div id="side">
        <div className="side__text">
          <ul>
            <h1>
              <Link to="/home">INDEX</Link>
            </h1>
          </ul>
          <ul>
            <h3>Main</h3>
            <li onClick={() => setCurrentComponent("Home")}>
              <span>메인페이지</span>
              <p>페이지 코딩~6.31</p>
              <p>반응형 ~ing</p>
            </li>
          </ul>
          <ul>
            <h3>Data List</h3>
            <li onClick={() => setCurrentComponent("List")}>
              <span>전체 리스트</span>
            </li>
            <li onClick={() => setCurrentComponent("List")}>
              <span>리스트 상세</span>
            </li>
          </ul>
          <ul>
            <h3>Board</h3>
            <li onClick={() => setCurrentComponent("Board")}>
              <span>공지사항</span>
            </li>
            <li onClick={() => setCurrentComponent("/")}>
              <span>공지사항 상세</span>
            </li>
          </ul>
          <ul>
            <h3>My Page</h3>
            <li onClick={() => setCurrentComponent("MyPage")}>
              <span>마이페이지</span>
            </li>
          </ul>
          <ul>
            <h3>Login</h3>
            <li onClick={() => setCurrentComponent("Login")}>
              <span>로그인</span>
            </li>
            <li onClick={() => setCurrentComponent("Login")}>
              <span>회원가입</span>
            </li>
          </ul>
          <ul>
            <h3>Admin Page</h3>
            <li onClick={() => setCurrentComponent("Admin")}>
              <span>관리자 페이지</span>
            </li>
          </ul>
          <ul>
            <h3>상세정보</h3>
            <li onClick={() => setCurrentComponent("/")}>
              <span>~Ing</span>
            </li>
          </ul>
          <ul>
            <h3>지도</h3>
            <li onClick={() => setCurrentComponent("/")}>
              <span>~Ing</span>
            </li>
          </ul>
          <ul>
            <h3>데이터 수집</h3>
            <li>
              <Link to="https://github.com/jaehyuk-lee-0712/druwa_datas">
                데이터
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div id="content">{renderComponent()}</div>
    </section>
  );
};

export default Test;
