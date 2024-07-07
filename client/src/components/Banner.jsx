import React from "react";
import { info } from "../data/list";
import image from "../assets/img/stabuck1.png";

const Banner = () => {
  return (
    <>
      {info.slice(1).map((item, index) => (
        <div key={index} className="slide__box">
          <div className="slide__content">
            <div className="slide__img">
              <img src={image} alt="#" />
            </div>
            <div className="slide__text">
              <div className="slide__title">{item.title}</div>
              <div>
                <div className="slide__price">{item.price}</div>
                <div className="slide__label">(인기순)</div>
              </div>
            </div>
            <div className="slide__info">
              <div className="slide__tag">
                <div className="tag__info1">거리</div>
                <div>{item.info1}</div>
              </div>
              <div className="slide__tag">
                <div className="tag__info2">종류</div>
                <div>{item.info2}</div>
              </div>
              <div className="slide__tag">
                <div className="tag__info3">별점</div>
                <div>{item.info3}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Banner;
