import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userInfo, setUserInfo } = useContext(UserContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    fetch("http://localhost:9000/profile", {
      credentials: "include",
    }).then((response) => {
      if (response.ok) {
        response.json().then((userInfo) => {
          setUserInfo(userInfo);
        });
      } else {
        setUserInfo(null); // 로그인 상태가 아니므로 userInfo를 null로 설정
      }
    });
  }, [setUserInfo]);

  const logout = () => {
    fetch("http://localhost:9000/logout", {
      credentials: "include",
      method: "POST",
    }).then((response) => {
      if (response.ok) {
        setUserInfo(null); // 로그아웃 후 userInfo를 null로 설정
        alert("로그아웃이 되었습니다.");
      } else {
        alert("로그아웃에 실패했습니다.");
      }
    });
  };

  return (
    <header id="header">
      <div className="header__inner container">
        <div className="logo">
          <Link to="/">Druwa</Link>
        </div>
        <div className="nav">
          <ul>
            <li>
              <Link to="/map">지도</Link>
            </li>
            <li>
              <Link to="/list">전체 매장</Link>
            </li>
            <li>
              <Link to="/board">게시판</Link>
            </li>
            <li>
              <Link to="/Notice">공지사항</Link>
            </li>
          </ul>
        </div>
        <div className="utils">
          <div className="utils__list">
            {userInfo ? (
              <span className="profile-logout" onClick={logout}>
                <span>로그아웃</span>
              </span>
            ) : (
              <Link to="/login">로그인</Link>
            )}
          </div>
        </div>
        <div className="menu">
          <button
            className={`menubtn ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <div className="icon">
              <div className="line lineup"></div>
              <div className="line linemid"></div>
              <div className="line linedown"></div>
            </div>
          </button>
        </div>
        <div className={`fullmenu ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/map">지도</Link>
            </li>
            <li>
              <Link to="/">전체 매장</Link>
            </li>
            <li>
              <Link to="/">이벤트</Link>
            </li>
            <li>
              <Link to="/board">공지사항</Link>
            </li>
            {userInfo ? (
              <li>
                <span className="profile-logout" onClick={logout}>
                  로그아웃
                </span>
              </li>
            ) : (
              <li>
                <Link to="/login">로그인</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
