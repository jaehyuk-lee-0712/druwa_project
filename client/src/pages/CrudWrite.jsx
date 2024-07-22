import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

const CrudWrite = () => {
  const [boardTitle, setBoardTitle] = useState("");
  const [boardConts, setBoardConts] = useState("");
  const navigate = useNavigate();

  const boardWrite = async (e) => {
    e.preventDefault();
    const data = {
      boardTitle,
      boardConts,
      boardAuthor: { youName: "YourName" },
    };

    try {
      const response = await fetch("http://localhost:9000/CrudWrite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("성공");
        navigate("/crud");
      } else {
        const errorData = await response.json();
        console.error("Error response from server:", errorData);
        alert("실패");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("서버와의 통신에 실패했습니다.");
    }
  };

  return (
    <section className="board__inner board-container">
      <h3 className="blind">게시판 글쓰기</h3>
      <div className="board__write">
        <form onSubmit={boardWrite}>
          <fieldset>
            <legend className="blind">게시글 작성하기</legend>
            <div>
              <label htmlFor="boardTitle">제목</label>
              <input
                type="text"
                id="boardTitle"
                name="boardTitle"
                placeholder="제목을 작성하세요!"
                value={boardTitle}
                onChange={(e) => setBoardTitle(e.target.value)}
              />
            </div>
            <div className="board__input">
              <ReactQuill
                value={boardConts}
                modules={modules}
                formats={formats}
                onChange={(newValue) => setBoardConts(newValue)}
              />
            </div>
            <div className="btn">
              <button type="submit">저장하기</button>
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default CrudWrite;
