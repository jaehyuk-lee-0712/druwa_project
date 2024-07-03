import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
              <Link to="/">부동산</Link>
            </li>
            <li>
              <Link to="/">코리니</Link>
            </li>
            <li>
              <Link to="/">자주</Link>
            </li>
            <li>
              <Link to="/board">공지사항</Link>
            </li>
          </ul>
        </div>
        <div className="utils">
          <div className="utils__list">
            <div className="btn">
              <button></button>
            </div>
            <Link to="/">로그인</Link>
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
              <Link to="/">구매</Link>
            </li>
            <li>
              <Link to="/">렌트</Link>
            </li>
            <li>
              <Link to="/">부동산</Link>
            </li>
            <li>
              <Link to="/">상업용</Link>
            </li>
            <li>
              <Link to="/">로그인</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
