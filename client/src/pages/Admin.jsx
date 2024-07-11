import React, { useState } from "react";
import AdminHomeSection from "../components/AdminHomeSection";
import AdminMemberSection from "../components/AdminMemberSection";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [activeTabClass, setActiveTabClass] = useState("home");

  const renderSection = () => {
    switch (activeTab) {
      case "home":
        return <AdminHomeSection />;
      case "members":
        return <AdminMemberSection />;
      default:
        return <AdminHomeSection />;
    }
  };

  const handleTabClick = (tab) => {
    setActiveTabClass(tab);
    setActiveTab(tab);
  };

  const getTabClass = (tab) => {
    return activeTabClass === tab ? "tab__home" : "tab__normal";
  };
  return (
    <section id="adminMain">
      <div id="sideSection" className="transition-all">
        <div className="side__box">
          <div className="side__logo__box"></div>
          <div className="side__conts transition-all">
            <div className="side__conts__box transition-all">
              <div className="conts__box__full">
                <div className="contents__box__full">
                  <div className="top__name__box">
                    <div className="amdin__profile__box transition-all">
                      <div className="profile__inner transition-all">
                        <div className="img__box transition-all">
                          <div className="img__text">T</div>
                        </div>
                        <div className="name__box">
                          <div className="main__name">Test</div>
                          <div className="sub__name">
                            <span className="sub__name__text">스타터</span>
                          </div>
                        </div>
                        <div className="arrow__box">
                          <span className="arrow__img__span">
                            <svg
                              viewBox="64 64 896 896"
                              focusable="false"
                              data-icon="double-right"
                              width="1em"
                              height="1em"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z"></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <hr className="border-gray-300"></hr> */}
              </div>
            </div>
            <div className="side__menu__bar">
              <div className="side__menu__text">
                <div className="text__box">
                  <div className="truncate">메뉴(음식점)</div>
                </div>
                <div className="icon__wrap">
                  <span className="icon__box">
                    <svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="api"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M917.7 148.8l-42.4-42.4c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-76.1 76.1a199.27 199.27 0 00-112.1-34.3c-51.2 0-102.4 19.5-141.5 58.6L432.3 308.7a8.03 8.03 0 000 11.3L704 591.7c1.6 1.6 3.6 2.3 5.7 2.3 2 0 4.1-.8 5.7-2.3l101.9-101.9c68.9-69 77-175.7 24.3-253.5l76.1-76.1c3.1-3.2 3.1-8.3 0-11.4zM769.1 441.7l-59.4 59.4-186.8-186.8 59.4-59.4c24.9-24.9 58.1-38.7 93.4-38.7 35.3 0 68.4 13.7 93.4 38.7 24.9 24.9 38.7 58.1 38.7 93.4 0 35.3-13.8 68.4-38.7 93.4zm-190.2 105a8.03 8.03 0 00-11.3 0L501 613.3 410.7 523l66.7-66.7c3.1-3.1 3.1-8.2 0-11.3L441 408.6a8.03 8.03 0 00-11.3 0L363 475.3l-43-43a7.85 7.85 0 00-5.7-2.3c-2 0-4.1.8-5.7 2.3L206.8 534.2c-68.9 69-77 175.7-24.3 253.5l-76.1 76.1a8.03 8.03 0 000 11.3l42.4 42.4c1.6 1.6 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3l76.1-76.1c33.7 22.9 72.9 34.3 112.1 34.3 51.2 0 102.4-19.5 141.5-58.6l101.9-101.9c3.1-3.1 3.1-8.2 0-11.3l-43-43 66.7-66.7c3.1-3.1 3.1-8.2 0-11.3l-36.6-36.2zM441.7 769.1a131.32 131.32 0 01-93.4 38.7c-35.3 0-68.4-13.7-93.4-38.7a131.32 131.32 0 01-38.7-93.4c0-35.3 13.7-68.4 38.7-93.4l59.4-59.4 186.8 186.8-59.4 59.4z"></path>
                    </svg>
                  </span>
                </div>
                <div className="favorite__icon__wrap">
                  <div className="icon__box">
                    <span className="icon__wrapper">
                      <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="star"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="mainSection">
        <main className="main__inner transition-all">
          <div className="main__sticy__top transition-all">
            <div className="top__box">
              <div className="top__inner">
                <a className="top__text__box transition-all" href="/">
                  <div className="top__text">
                    <div className="logo__container transition-all">
                      <div className="inner__text">A</div>
                    </div>
                    <div className="text__container">관리자 페이지</div>
                  </div>
                  <div className="top__icon">
                    <div className="icon__inner">
                      <span className="icon__span">
                        <svg
                          viewBox="64 64 896 896"
                          focusable="false"
                          data-icon="star"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="main__contents__box transition-all">
              <div className="main__contents__inner">
                <div className="sticy__sub__conts">
                  <div className="conts__tabs">
                    <div className="tab__list" role="tablist">
                      <div className="tabs__wrap">
                        <div className="tabs__nav">
                          <div
                            className={`tab__home ${
                              activeTab === "home" ? "active" : ""
                            }`}
                            onClick={() => handleTabClick("home")}
                          >
                            <div
                              className={`tab ${
                                activeTab === "home" ? "active" : ""
                              }`}
                            >
                              프로젝트 홈
                            </div>
                          </div>
                          <div
                            className={`tab__normal ${
                              activeTab === "members" ? "active" : ""
                            }`}
                            onClick={() => handleTabClick("members")}
                          >
                            <div
                              className={`tab ${
                                activeTab === "members" ? "active" : ""
                              }`}
                            >
                              맴버 (1)
                            </div>
                          </div>
                          <div
                            className={`tab__normal ${
                              activeTab === "settings" ? "active" : ""
                            }`}
                            onClick={() => handleTabClick("settings")}
                          >
                            <div
                              className={`tab ${
                                activeTab === "settings" ? "active" : ""
                              }`}
                            >
                              설정
                            </div>
                          </div>
                          <div
                            className={`tab__normal ${
                              activeTab === "usage" ? "active" : ""
                            }`}
                            onClick={() => handleTabClick("usage")}
                          >
                            <div
                              className={`tab ${
                                activeTab === "usage" ? "active" : ""
                              }`}
                            >
                              사용량
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {renderSection()}
              </div>
            </div>
          </div>
        </main>
      </section>
    </section>
  );
};

export default Admin;
