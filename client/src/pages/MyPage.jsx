import React from "react";

const MyPage = () => {
  return (
    <div id="mypage">
      <div className="my__info">
        <div className="my__left">
          <div className="my__left__text">
            <h1>계정 관리</h1>
            <div className="my__left__side">
              <li>비밀번호수정</li>
              <li>등록한 매장</li>
              <li>작성한 리뷰</li>
              <li>회원 탈퇴</li>
            </div>
          </div>
        </div>
        <div className="my__right">
          <div className="my__right__content section1">
            <div className="my__right__text">
              <h1>비밀번호 변경</h1>
              <p>
                주기적으로 비밀번호를 변경하면 계정 무단 로그인을 방지할 수
                있습니다.
              </p>
            </div>
            <div className="my__right__action">
              <div className="my__right__id">
                <label htmlFor="">계정 이름</label>
                <input
                  type="text"
                  name=""
                  id="right__id"
                  placeholder="계정 이름"
                  value={"1234***"}
                />
              </div>
              <p>비밀번호 변경</p>
              <div className="my__right__pass">
                <label htmlFor="">현재 비밀번호</label>
                <input type="password" />
              </div>
              <div className="my__right__newpass">
                <label htmlFor="">새 비밀번호</label>
                <input type="password" />
              </div>
              <div className="my__right__checkpass">
                <label htmlFor="">새 비밀번호 확인</label>
                <input type="password" />
              </div>
              <div className="my__right__button">
                <button className="my__right__cancel">취소</button>
                <button className="my__right__save">저장</button>
              </div>
            </div>
          </div>
          <div className="my__right__content section2">
            <div className="my__right__text">
              <h1>등록한 매장</h1>
              <p>
                내가 직접 등록한 매장을 확인할 수 있습니다.
              </p>
            </div>
            <div className="my__right__action">
              <p>매장 정보</p>
              <div className="my__right__pass">
                <label htmlFor="">매장이름</label>
                <input
                  type="text"
                  placeholder="안산시 중앙동 라인컴퓨터점 608커피"
                />
              </div>
              <div className="my__right__newpass">
                <label htmlFor="">매장이름</label>
                <input
                  type="text"
                  placeholder="안산시 중앙동 라인컴퓨터점 608커피"
                />
              </div>
              <div className="my__right__checkpass">
                <label htmlFor="">매장이름</label>
                <input
                  type="text"
                  placeholder="안산시 중앙동 라인컴퓨터점 608커피"
                />
              </div>
              <div className="my__right__button">
                <button className="my__right__cancel">취소</button>
                <button className="my__right__save">저장</button>
              </div>
            </div>
          </div>
          <div className="my__right__content section3">
            <div className="my__right__text">
              <h1>작성한 리뷰</h1>
              <p>
                작성한 리뷰를 확인할 수 있습니다.
              </p>
            </div>
            <div className="my__right__action">
              <p>작성 리뷰</p>
              <div className="my__right__pass">
                <label htmlFor="">스타벅스</label>
                <input type="text" placeholder="리뷰작성한 가게 이름" />
              </div>
              <div className="my__right__newpass">
                <label htmlFor="">리뷰내용</label>
                <input type="text" placeholder="맛이 너무 좋아요" />
              </div>
              <div className="my__right__button">
                <button className="my__right__cancel">취소</button>
                <button className="my__right__save">저장</button>
              </div>
            </div>
          </div>

          <div className="my__right__content section4">
            <div className="my__right__text">
              <h1>회원 탈퇴</h1>
             
            </div>
            <div className="my__right__action">
              <button className="my__right__out">회원탈퇴</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
