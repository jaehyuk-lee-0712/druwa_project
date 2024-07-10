import React, { useState } from "react";
import Home from "./Home";
import Login from "./Login";
import Board from "./Board";
import MyPage from "./MyPage";
import Admin from "./Admin";
import List from "./List";
import { Link } from "react-router-dom";

const Test = () => {
  const [currentComponent, setCurrentComponent] = useState("Home");
  const [activeItem, setActiveItem] = useState("Home");

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

  const handleClick = (component) => {
    setCurrentComponent(component);
    setActiveItem(component);
  };

  return (
    <section id="wrap">
      <div id="side">
        <div className="side__text">
          <ul>
            <h1>
              <Link to="/home">Druwa</Link>
            </h1>
          </ul>
          <ul>
            <li
              className={activeItem === "Home" ? "active" : ""}
              onClick={() => {
                handleClick("Home");
                setCurrentComponent("Home");
              }}
            >
              <div className="index__text">
                <h3>메인페이지</h3>
                <p>60%</p>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: "60%" }}></div>
              </div>
            </li>
            <li
              className={activeItem === "List" ? "active" : ""}
              onClick={() => {
                handleClick("List");
                setCurrentComponent("List");
              }}
            >
              <div className="index__text">
                <h3>전체 리스트</h3>
                <p>40%</p>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: "40%" }}></div>
              </div>
            </li>
            <li
              className={activeItem === "Board" ? "active" : ""}
              onClick={() => {
                handleClick("Board");
                setCurrentComponent("Board");
              }}
            >
              <div className="index__text">
                <h3>공지사항</h3>
                <p>30%</p>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: "30%" }}></div>
              </div>
            </li>
            <li
              className={activeItem === "MyPage" ? "active" : ""}
              onClick={() => {
                handleClick("MyPage");
                setCurrentComponent("MyPage");
              }}
            >
              <div className="index__text">
                <h3>마이페이지</h3>
                <p>30%</p>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: "30%" }}></div>
              </div>
            </li>
            <li
              className={activeItem === "Login" ? "active" : ""}
              onClick={() => {
                handleClick("Login");
                setCurrentComponent("Login");
              }}
            >
              <div className="index__text">
                <h3>로그인</h3>
                <p>70%</p>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: "70%" }}></div>
              </div>
            </li>
            <li
              className={activeItem === "Admin" ? "active" : ""}
              onClick={() => {
                handleClick("Admin");
                setCurrentComponent("Admin");
              }}
            >
              <div className="index__text">
                <h3>관리자 페이지</h3>
                <p>30%</p>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: "30%" }}></div>
              </div>
            </li>
            <li onClick={() => handleClick("Home")}>
              <div className="index__text">
                <h3>메인 지도</h3> <p>30%</p>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: "30%" }}></div>
              </div>
            </li>
            <li>
              <div className="index__text">
                <Link to="https://github.com/jaehyuk-lee-0712/druwa_datas">
                  <h3>데이터 수집</h3>
                </Link>
                <p>70%</p>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: "70%" }}></div>
              </div>
            </li>
          </ul>
          <ul>
            <li onClick={() => handleClick("/")}>
              <div className="index__text">
                <h3>리스트 상세</h3>
                <p>0%</p>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: "0%" }}></div>
              </div>
            </li>
            <li onClick={() => handleClick("Home")}>
              <div className="index__text">
                <h3>공지사항 상세</h3> <p>0%</p>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: "0%" }}></div>
              </div>
            </li>
            <li onClick={() => handleClick("Home")}>
              <div className="index__text">
                <h3>리뷰 페이지</h3> <p>0%</p>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: "0%" }}></div>
              </div>
            </li>
            <li onClick={() => handleClick("Home")}>
              <div className="index__text">
                <h3>매장 등록</h3> <p>0%</p>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: "0%" }}></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div id="content">{renderComponent()}</div>
    </section>
  );
};

export default Test;
