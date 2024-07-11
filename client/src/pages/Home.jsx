import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <section className="home">
      <div className="home__inner container">
        <div className="home__txt">
          <div className="title">
            <span>당신의 여유를 위한</span>
          </div>
          <div className="subject">
            일상 속 행복 찾기 솔루션, <em>드루와</em>
          </div>
          <div className="video">
            <video className="video__inner">
              <source
                src="https://koriny-site.s3.amazonaws.com/video/youngnrich.mp4"
                type="video/mp4"
              />
            </video>
            <div className="video__menu">
              <div className="btn">
                매장 보기
                <svg
                  class="section_hero_svg__gqVad"
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                >
                  <circle cx="32" cy="31.9961" r="32" fill="black"></circle>{" "}
                  <path
                    d="M34.9292 25.5325L33.515 26.9467L38.1748 31.6065L23 31.6074V33.6015L38.1748 33.6005L33.515 38.2604L34.9292 39.6746L42.0002 32.6035L34.9292 25.5325Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
              <div className="btn">
                지도 보기
                <svg
                  class="section_hero_svg__gqVad"
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                >
                  <circle cx="32" cy="31.9961" r="32" fill="black"></circle>{" "}
                  <path
                    d="M34.9292 25.5325L33.515 26.9467L38.1748 31.6065L23 31.6074V33.6015L38.1748 33.6005L33.515 38.2604L34.9292 39.6746L42.0002 32.6035L34.9292 25.5325Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="home__side">
          <div className="inquiry">
            <div className="label">나만의 매장</div>
            <Link to="/">
              리뷰 작성
              <svg
                class="arrow-next"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                aria-hidden="true"
              >
                <path class="arrow-line" d="M0 5h7"></path>
                <path class="arrow-path" d="M1 1l4 4-4 4"></path>
              </svg>
            </Link>
            <Link to="/">
              리뷰 보기
              <svg
                class="arrow-next"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                aria-hidden="true"
              >
                <path class="arrow-line" d="M0 5h7"></path>
                <path class="arrow-path" d="M1 1l4 4-4 4"></path>
              </svg>
            </Link>
            <Link to="/">
              나만의 매장 등록
              <svg
                class="arrow-next"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                aria-hidden="true"
              >
                <path class="arrow-line" d="M0 5h7"></path>
                <path class="arrow-path" d="M1 1l4 4-4 4"></path>
              </svg>
            </Link>
          </div>
          <div className="sales">
            <Link to="/">가장 많이 찾은 메뉴</Link>
          </div>
          <div className="sales">
            <Link to="/">근처 유명지</Link>
          </div>
          <div className="faq">
            <Link to="/">자주하는 질문</Link>
          </div>
        </div>
        <div className="home__mobile">
          <div className="location">
            <div className="loc__btn">
              <Link to="/">구매 매물</Link>
              <svg
                class="section_hero_icon-image__90mvv"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"></path>
              </svg>
            </div>
            <div className="loc__btn">
              <Link to="/">렌트 매물</Link>
              <svg
                class="section_hero_icon-image__90mvv"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"></path>
              </svg>
            </div>
          </div>
          <div className="tags">
            <Link to="/">부동산 매각</Link>
            <Link to="/">상업용 부동산</Link>
            <Link to="/">자주묻는 질문</Link>
          </div>
          <div className="cards">
            <Link to="/">
              <div className="card__title">살고싶은집</div>
              <button>렌트 문의</button>
            </Link>
            <Link to="/">
              <div className="card__title">가치높은 부동산</div>
              <button>구매 문의</button>
            </Link>
            <Link to="/">
              <div className="card__title">조건에 맞는</div>
              <button>상가/오피스 문의</button>
            </Link>
          </div>
        </div>
      </div>

      <section className="main__banner">
        <div className="banner__container">
          <div className="banner__text">
            <div className="banner__title">
              <h2>가장 인기있는 매장</h2>
              <h1>
                실시간 인기매장,
                <br /> 드루와에서 확인하세요!
              </h1>
            </div>
            <p>
              전국 드라이브 매장 중 가장 인기있는 매장을 소개합니다. 실시간으로
              오늘의 매장을 확인하세요. 드루와에서 확인하세요.
            </p>
          </div>
          <div className="banner__btn">
            <Link>서비스안내</Link>
          </div>
        </div>
        <div className="banner__slide">
          <div className="slide__container">
            <Banner />
            <Banner />
            <Banner />
          </div>
        </div>
        <div className="banner__slide">
          <div className="slide__container">
            <Banner />
            <Banner />
            <Banner />
          </div>
        </div>

        <div className="banner__slide">
          <div className="slide__container">
            <Banner />
            <Banner />
            <Banner />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
