import React, { useEffect, useState } from "react";

const Crud = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/crud", {
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
    <div>
      <div className="board-container">
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>등록자</th>
              <th>등록일</th>
              <th>조회수</th>
            </tr>
          </thead>
          <tbody>
            {boards.map((val, key) => (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{val.boardTitle}</td>
                <td>{val.boardAuthor.youName}</td>
                <td>{new Date(val.createdAt).toLocaleDateString()}</td>
                <td>{val.boardViews}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="crud__page">
        <a href="/" className="pageLeft">
          <span className="blind">이전</span>
        </a>
        <ul>
          <li>
            <a href="/" className="active">
              1
            </a>
          </li>
        </ul>
        <a href="/" className="pageRight">
          <span className="blind">다음</span>
        </a>
      </div>
    </div>
  );
};

export default Crud;
