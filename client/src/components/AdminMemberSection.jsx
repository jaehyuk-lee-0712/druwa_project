import React from "react";

const AdminMemberSection = () => {
  return (
    <>
      <div className="member__serch__box">
        {/* member__search area start */}
        <div className="member__search__inner">
          <span className="search__icon__wrap">
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="search"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
            </svg>
          </span>
          <input
            placeholder="이름 또는 Email을 입력하여 멤버 검색"
            className="member__search__input"
            type="text"
            value=""
          />
        </div>
      </div>
      {/* member__search area end */}

      {/* member__list area start */}
      <div className="membert__list">
        <div className="member__list__inner">
          <div className="member__list__wrap">
            <div className="member__list__container">
              <div className="member__table">
                <div className="member__table__container">
                  <div className="member__table__content">
                    <table className="member__table__main">
                      <colgroup>
                        <col />
                        <col style={{ width: "200px" }} />
                        <col style={{ width: "100px" }} />
                      </colgroup>
                      <thead className="member__table__head">
                        <tr>
                          <th className="member__name__header">
                            <div className="member__name__wrap">
                              <span className="member__name__title">이름</span>
                              <span className="solt__icon__wrap">
                                <span className="solt__icon__inner">
                                  <span className="solt__icon__up">
                                    <svg
                                      viewBox="0 0 1024 1024"
                                      focusable="false"
                                      data-icon="caret-up"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path>
                                    </svg>
                                  </span>
                                  <span className="solt__icon__down">
                                    <svg
                                      viewBox="0 0 1024 1024"
                                      focusable="false"
                                      data-icon="caret-down"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
                                    </svg>
                                  </span>
                                </span>
                              </span>
                            </div>
                          </th>
                          <th className="member__status__header">
                            <div className="status__sort__wrap">
                              <span className="status__sort__title">
                                <div className="sort__title__inner">
                                  <span>권한</span>
                                  <a href="/" className="title__icon__wrap">
                                    <span className="title__icon__inner">
                                      <svg
                                        viewBox="64 64 896 896"
                                        focusable="false"
                                        data-icon="question-circle"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="true"
                                      >
                                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                                        <path d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"></path>
                                      </svg>
                                    </span>
                                  </a>
                                </div>
                              </span>
                              <span className="status__sort__icon">
                                <span className="sort__icon__inner">
                                  <span className="solt__icon__up">
                                    <svg
                                      viewBox="0 0 1024 1024"
                                      focusable="false"
                                      data-icon="caret-up"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path>
                                    </svg>
                                  </span>
                                  <span className="solt__icon__down">
                                    <svg
                                      viewBox="0 0 1024 1024"
                                      focusable="false"
                                      data-icon="caret-down"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
                                    </svg>
                                  </span>
                                </span>
                              </span>
                            </div>
                          </th>
                          <th className="space__header"></th>
                        </tr>
                      </thead>
                      <tbody className="member__table__body">
                        <tr>
                          <td className="member__cell__body">
                            <div className="member__name__cell">
                              <div className="member__profile__wrap"></div>
                              <div className="member__info__wrap">
                                <div className="member__info__name">
                                  이재혁
                                  <span className="member__info__tag">Me</span>
                                </div>
                                <div className="member__info__email">
                                  dlwogur0712@gmail.com
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="member__cell__body">
                            <div className="member__status__select">
                              <div className="status__select__selector">
                                <span className="status__select__search">
                                  <input
                                    type="search"
                                    disabled=""
                                    autoComplete="off"
                                    class="status__search__input"
                                    readonly=""
                                    unselectable="on"
                                    value=""
                                    id="rc_select_87"
                                    style={{ opacity: 0 }}
                                  />
                                </span>
                                <span className="status__select__item">
                                  <div>
                                    <div>소유자</div>
                                    {/* <div></div> */}
                                  </div>
                                </span>
                              </div>
                            </div>
                            <span className="status__select__arrow">
                              <span className="select__arrow__img">
                                <svg
                                  viewBox="64 64 896 896"
                                  focusable="false"
                                  data-icon="down"
                                  width="1em"
                                  height="1em"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                                </svg>
                              </span>
                            </span>
                          </td>
                          <td className="member__cell__body"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="member__cnt__inner">
          <div style={{ color: "#000000d9", fontSize: "13px" }}>
            사용 가능한 맴버 수 :{" "}
          </div>
          <span className="member__cnt__info">
            <span className="cnt">1 /3</span>
            <span className="cnt__wrap">
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="info-circle"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                <path d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path>
              </svg>
            </span>
          </span>
        </div>
      </div>
      {/* member__list area end */}
    </>
  );
};

export default AdminMemberSection;
