import React, { useState } from "react";

const Map = () => {
  // 사이드 메뉴접기,펼치기
  const [mainMenu, setMainMenu] = useState(true);
  const [isSearch, setIsSearch] = useState(true);

  const toggleMenu = () => {
    setMainMenu(!mainMenu);
  };
  const toggleSearch = () => {
    setIsSearch(!isSearch);
    setMainMenu(!mainMenu);
    console.log("main:", mainMenu);
    console.log("search:", isSearch);
  };

  return (
    <section className="map">
      <div
        className={`top__ui__base ${
          mainMenu ? "hide" : isSearch ? "" : "hide"
        }`}
      >
        <div className="top__ui">
          <div className="top__ui__table">
            <div className="top__table__logo">
              <div className="logo__img"></div>
              <span className="logo__span"></span>
            </div>
            <div className="top__table__search" onClick={toggleSearch}>
              <input
                type="search"
                className="search__input"
                placeholder="검색어를 입력해주세요"
              />
              <div className="search__img"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`top__ui__banner ${
          mainMenu ? "hide" : isSearch ? "" : "hide"
        }`}
      >
        <div className="tui__banner">
          <div className="tui__banner__info">
            <div className="tbi__addr">
              <div className="tui__title">서초구</div>
              <div className="tui__sub">서울특별시</div>
            </div>
            <div className="tbi__actn">
              <div className="actn__dp" onClick={toggleMenu}>
                <span>
                  <div className="img"></div>
                  펼치기
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`top__ui__search ${isSearch ? "" : "open"}`}>
        <div className="top__search">
          <div className="ts__query">
            <form action="">
              <span className="back_btn" onClick={toggleSearch}>
                <div className="img"></div>
              </span>
              <input
                type="search"
                className="search__input"
                placeholder="검색어를 입력해주세요"
              />
              <span className="search__btn">
                <div className="img"></div>
              </span>
            </form>
          </div>
          <div className="ts__result">
            <div className="ts__search__result">
              최근검색
              <button className="clear__search">전체삭제</button>
            </div>
            <div className="search__history">
              경기도 고양시 덕양구
              <button className="search__history__btn">
                <div className="img"></div>
              </button>
            </div>
          </div>
          <div className="autocomplete__result">
            <div className="autocomplete__results">
              {/* 검색 자동완성 결과반복 */}
              <div className="autocomplete__suggestion">
                <div className="img"></div>
                경상북도 김천시 부항면<strong className="st__blue"> 안</strong>
                간리
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`map__menu ${mainMenu ? (isSearch ? "" : "hide") : "hide"}`}
      >
        <div className="menu__header">
          <div className="top__ui">
            <div className="menu__btn"></div>
            <div className="top__logo">Druwa</div>
            <div className="top__right">
              <div className="top__right__search" onClick={toggleSearch}>
                <div className="right__search__img"></div>
              </div>
              <div className="top__right__profile">
                <div className="right__profile__img"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu__back">
          <div className="top__ui">
            <div className="menu__btn" onClick={toggleMenu}></div>
            <div className="top__logo">druwa</div>
          </div>
        </div>
        <div className={`map__contents ${mainMenu ? "" : "hide"}`}>
          <div className="fold__btn" onClick={toggleMenu}>
            <div className="fold__img"></div>
          </div>

          <div className="cont__scroll">
            <div className="cont__header">
              <div className="cont__header__tab">
                <div className="cont__header__left">서초구</div>
                <div className="cont__header__right">서울특별시</div>
              </div>
            </div>
            <div className="cont__tabmenu">
              <div className="tabmenu__btn" data-selected="false">
                Home
              </div>
              <div className="tabmenu__btn" data-selected="true">
                매물
              </div>
              <div className="tabmenu__btn" data-selected="false">
                경매
              </div>
              <div className="tabmenu__btn" data-selected="false">
                포스트
              </div>
            </div>
            <div className="blue__display">
              <span>서울특별시 서초구</span>
              <span>내곡동</span>
            </div>
            <section className="cont__lobby">
              <div className="lobby__inner">
                <ul>
                  <li>
                    <button>
                      <div className="lobby__img"></div>
                      <span>자산관리</span>
                    </button>
                  </li>
                </ul>
              </div>
            </section>
            <section className="cont__popular">
              <div className="popular__title">
                <strong>인기 서비스를 만나보세요!</strong>
              </div>
              <div className="popular__box">
                <button className="popular__btn">
                  <div className="popular__btn__up">
                    <div className="up__fir">스타벅스</div>
                    <div className="up__sec">커피맛집</div>
                  </div>
                  <div className="popular__btn__down">
                    <div className="down__fir">HOT</div>
                    <div className="down__sec">
                      <div className="down__icon"></div>
                    </div>
                  </div>
                </button>
                <button className="popular__btn">
                  <div className="popular__btn__up">
                    <div className="up__fir">롯데리아</div>
                    <div className="up__sec">데리버거</div>
                  </div>
                  <div className="popular__btn__down">
                    <div className="down__fir"></div>
                    <div className="down__sec">
                      <div className="down__icon"></div>
                    </div>
                  </div>
                </button>
              </div>
            </section>
            <section className="cont__box">
              <div className="cont__box__title">
                <div className="cont__title__left">추천 컨텐츠</div>
                <div className="cont__title__right">
                  <div className="right1">더보기</div>
                  <div className="right2"></div>
                </div>
              </div>
              <div className="cont__box__cont">
                <article className="post__item">
                  <div className="post__item__img"></div>
                  <div className="post__item__text">
                    <div className="title">
                      [572] 내포 상가임대 / 병원입지상가 / 대로변코너 / 3층 50평
                      / 3층 50평
                    </div>
                    <div className="desc">
                      {" "}
                      충청남도 홍성군 홍북읍 신경리 상가 임대 충청남도 홍성군
                      홍북읍 신경리 상가 임대
                    </div>
                  </div>
                </article>
                <article className="post__item">
                  <div className="post__item__img"></div>
                  <div className="post__item__text">
                    <div className="title">
                      [572] 내포 상가임대 / 병원입지상가 / 대로변코너 / 3층 50평
                      / 3층 50평
                    </div>
                    <div className="desc">
                      {" "}
                      충청남도 홍성군 홍북읍 신경리 상가 임대 충청남도 홍성군
                      홍북읍 신경리 상가 임대
                    </div>
                  </div>
                </article>
                <article className="post__item">
                  <div className="post__item__img"></div>
                  <div className="post__item__text">
                    <div className="title">
                      [572] 내포 상가임대 / 병원입지상가 / 대로변코너 / 3층 50평
                      / 3층 50평
                    </div>
                    <div className="desc">
                      {" "}
                      충청남도 홍성군 홍북읍 신경리 상가 임대 충청남도 홍성군
                      홍북읍 신경리 상가 임대
                    </div>
                  </div>
                </article>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div
        className={`menu__header__mobile ${
          mainMenu ? "hide" : isSearch ? "" : "hide"
        }`}
      >
        <div className="top__ui">
          <div className="menu__btn"></div>
          <div className="top__logo">druwa</div>
          <div className="top__right" onClick={toggleSearch}>
            <div className="top__right__search">
              <div className="right__search__img"></div>
            </div>
            <div className="top__right__profile">
              <div className="right__profile__img"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile__bot__ui">
        <div className="bot__ui__handle">
          <div className="handle__mark" onClick={toggleMenu}></div>
        </div>
        <div className="bot__ui__cont">
          <div className="bot__scroll__cont">
            <div className="bot__address2">서초구</div>
            <div className="bot__flex">
              <div className="bot__address1">서울특별시</div>
              <div className="bot__more" onClick={toggleMenu}>
                더보기
                <div className="more__btn"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
