import React from "react";
import { Link } from "react-router-dom";

const test = async () => {
  const res = await fetch("https://druwa-project.onrender.com/test");

  console.log(res);

  return (
    <section className="test">
      <div className="test__box">
        <ul>
          <h1>인덱스</h1>
          <li>
            <Link to="/home">메인페이지(완료)</Link>
          </li>
          <li>
            <Link to="/admin">관리자페이지(완료)</Link>
          </li>
          <li>
            <Link to="/login">로그인(완료)</Link>
          </li>
          <li>
            <Link to="/list">전체리스트(완료)</Link>
          </li>
          <li>
            <Link to="/board">공지사항(완료)</Link>
          </li>
          <li>
            <Link to="/mypage">마이페이지(완료)</Link>
          </li>
          <li>
            <Link to="/">상세정보(~ing)</Link>
          </li>
          <li>
            <Link to="/">지도(~ing)</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default test;
