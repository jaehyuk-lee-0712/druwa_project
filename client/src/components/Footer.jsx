import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__section">
        <div className="footer__logo">
          <Link to="/">Druwa</Link>
        </div>
        <div className="footer__info">
          <p>개인정보 처리방침</p>
          <p>위치정보 이용약관</p>
          <p>문의하기</p>
          <p>공지사항</p>
        </div>
        <div className="footer__icon">
          <div className="icon__git"></div>
          <div className="icon__insta"></div>
          <div className="icon__youtube"></div>
        </div>
      </div>
      <div className="footer__copy">
        <div className="footer__copoylight">
          <p>Copyright © 2024 Druwa drivethru, Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
