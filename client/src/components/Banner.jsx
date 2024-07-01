import React from "react";
import { info } from "../data/list";
import image from "../assets/img/stabuck1.png";

const banner = () => {
  return (
    <>
      <div className="slide__box">
        <div className="slide__content">
          <div className="slide__img">
            <img src={image} alt="#" />
          </div>
          <div className="slide__text">
            <div className="slide__title">{info.title}</div>
            <div>
              <div className="slide__price">{info.price}</div>
              <div className="slide__laber">(인기순)</div>
            </div>
          </div>
          <div className="slide__info">
            <div className="slide__tag">
              <div className="tag__info1">거리</div>
              <div>{info.info1}</div>
            </div>
            <div className="slide__tag">
              <div className="tag__info2">종류</div>
              <div>카페</div>
            </div>
            <div className="slide__tag">
              <div className="tag__info3">별점</div>
              <div>4.8</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default banner;
