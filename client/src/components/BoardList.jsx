import React from "react";
import { boardList } from "../data/list";

const BoardList = () => {
  return (
    <ul>
      {boardList.map((item, index) => (
        <li key={index} className="board__list__box">
          <div className="board__list__cont">
            <div className="list__cont__type">{item.type}</div>
            <div className="list__cont__title">{item.title}</div>
            <div className="list__cont__date">{item.date}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BoardList;
