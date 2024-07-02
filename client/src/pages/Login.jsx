import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaCheckSquare } from "react-icons/fa";
import { useModal } from "../context/ModalContext";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const naviegate = useNavigate();

  const [showMemberBox, setShowMemberBox] = useState(false);
  const [memberText, setMemberText] = useState("회원가입");
  const [memberSubText, setMemberSubText] = useState(
    "비밀번호를 잃어버렸을 경우 이메일 아이디로 전송됩니다."
  );
  const [isEmailSent, setIsEmailSent] = useState(false); // 이메일 전송 여부
  const [emailValue, setEmailValue] = useState(""); // 이메일 변수
  const [verificationCodes, setVerificationCodes] = useState(Array(6).fill("")); // 인증번호 변수
  const [serverVerificationCode, setServerVerificationCode] = useState(""); // 서버에서 발송된 인증 코드를 저장
  const [verificationCheck, setVerificationCheck] = useState(false); // 인증 완료 여부
  const [userNameSet, setUserNameSet] = useState(false); // 닉네임변수

  const [lastStepCheck, setLastStepCheck] = useState(false); // 마지막 단계 체크

  const [userPassword, setUserPassword] = useState("");
  const [userPasswordCheck, setUserPasswordCheck] = useState("");

  const [userName, setUserName] = useState("");
  const inputRefs = useRef(Array(6).fill(null));

  //추가 정보
  const [userPhone, setUserPhone] = useState("");
  const [userType, setUserType] = useState("");

  const [sendStatus, setSendStatus] = useState("register");
  // Modal Setting
  const { openModal } = useModal();
  let modalMainText = "";
  let modalSubText = "";

  const generateVerificationCode = () => {
    const verification__code = Math.floor(
      100000 + Math.random() * 900000
    ).toString();
    setServerVerificationCode(verification__code); // 서버에서 인증 코드를 설정하는 것으로 가정
    return verification__code;
  };

  const handleVerificationCodeChange = (event, index) => {
    const newVerificationCodes = [...verificationCodes];
    newVerificationCodes[index] = event.target.value;
    setVerificationCodes(newVerificationCodes);

    if (event.target.value && index < 5) {
      inputRefs.current[index + 1].focus();
    } else if (newVerificationCodes.every((code) => code.length === 1)) {
      checkVerificationCode(newVerificationCodes);
    }
  };

  const handleSubBtnClick = (event, btnType) => {
    event.preventDefault();
    setShowMemberBox(!showMemberBox);

    if (btnType === "register") {
      setMemberText("회원가입");
      setMemberSubText(
        "비밀번호를 잃어버렸을 경우 이메일 아이디로 전송됩니다."
      );
    } else if (btnType === "findPassword") {
      setSendStatus("find`");
      setMemberText("비밀번호 찾기");
      setMemberSubText("가입하신 이메일로 인증 코드를 전송합니다.");
    } else if (btnType === "back") {
      setIsEmailSent(false);
      setVerificationCheck(false);
    }
  };

  const sedVerficationEmail = () => {
    const verificationCode = generateVerificationCode();

    let templateCode = "";

    const templateParams = {
      to_email: emailValue,
      from_name: "codetly",
      message: `인증 코드: ${verificationCode}`,
    };

    if (sendStatus === "register") {
      templateCode = "codetly_email";
    } else if (sendStatus === "findPass") {
      templateCode = "find_pass_template";
    }

    emailjs
      .send("codetly_email", templateCode, templateParams, "KaruqFkr68w-jBZ2q")
      .then((response) => {
        setIsEmailSent(true);
        setVerificationCodes(Array(6).fill(""));
      })
      .catch((error) => {
        console.error("이메일 보내기 실패 : ", error);
      });
  };

  const handleVerification = () => {
    sedVerficationEmail();
    setIsEmailSent(true);
  };

  const nextStepBtn = () => {
    setVerificationCheck(false);
    setUserNameSet(true);
    setMemberText("닉네임");
    setMemberSubText("플러그에서 사용할 닉네임을 입력해주세요!");
  };

  const lastStepBtn = () => {
    setLastStepCheck(true);
    setUserName(false);
    setMemberText("추가 정보");
    setMemberSubText("마지막으로 추가정보를 입력해주세요..");
  };

  const checkVerificationCode = (codes) => {
    const codeString = codes.join("");
    if (codeString === serverVerificationCode) {
      alert("인증 성공!");
      setVerificationCheck(true);
      setMemberText("비밀번호 설정");
      setMemberSubText("비밀번호를 입력해주세요!");
    } else {
      alert("인증 코드가 알맞지 않습니다.");
    }
  };

  // const userNameChecdk = (event) => {
  //   setUserName(event.target.value);
  // };

  const handleKeyDown = (event) => {
    const { key } = event;
    if (!/^\d$/.test(key)) {
      event.preventDefault();
    }
  };

  // 회원가입 데이터 생성 및 register api 호출
  const registerMember = async () => {
    const regDate = new Date().toISOString().slice(0, 10);
    const userData = {
      userEmail: emailValue,
      userPass: userPassword,
      userName: userName,
      phoneNumber: userPhone,
      userType: userType,
      deleteYn: "N",
      regDate: regDate,
    };

    try {
      const response = await fetch("http://localhost:8080/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const jsonResponse = await response.json();
      if (response.ok) {
        if (jsonResponse.status === "error") {
          alert(jsonResponse.message);
        } else {
          alert(jsonResponse.message);
        }
      } else {
        throw new Error("회원가입 실패: " + jsonResponse.message);
      }
    } catch (error) {
      console.error("회원가입 에러 발생", error);
      alert(error.message);
    }
  };

  const emailDuplicateChelck = async () => {
    if (emailValue !== null && emailValue !== "") {
      const checkData = {
        userEmail: emailValue,
      };

      const response = await fetch(
        "http://localhost:8080/api/emailDuplicateCheck",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(checkData),
        }
      );

      const jsonResponse = await response.json();

      if (response.ok) {
      }
    }
  };

  const loginUser = async () => {
    //  userEmail: emailValue,
    //   userPass: userPassword,

    // 이메일 입력 값 먼저 확인
    if (emailValue !== null && emailValue !== "") {
      // 비밀번호 입력값 확인
      if (userPassword !== null && userPassword !== "") {
        const loginData = {
          userEmail: emailValue,
          userPass: userPassword,
        };

        const response = await fetch("http://localhost:8080/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        });

        const jsonResponse = await response.json();

        if (response.ok) {
          if (jsonResponse.status === "error") {
            modalMainText = jsonResponse.message;
            modalSubText = jsonResponse.message + "\\n 한 번 더 확인해주세요!";
            openModal(modalMainText, modalSubText);
          } else {
            const userEmail = jsonResponse.userEmail;
            const userName = jsonResponse.userName;
            const userID = jsonResponse.userID;

            naviegate("/callender", { state: { userEmail, userName, userID } });
          }
        } else {
          throw new Error("로그인 실패 : " + jsonResponse.message);
        }
      } else {
        alert("비밀번호 미입력");
      }
    } else {
      alert("이메일 미입력");
    }
  };
  return (
    <>
      <div>
        <Modal mainText={modalMainText} subText={modalSubText}></Modal>
      </div>

      <main id="loginMain">
        <div className="login__left">
          <div className="left__container">
            <div className="ratangle"></div>
            <div className="login__text">
              {/* <button onClick={openModal}>1241</button> */}
              <p className="login__text__main">
                Let's Drive
                <br />
                In Your
                <br />
                Happy!
              </p>
              <p className="login__text__sub">
                가장 가까운 일상 속의 행복!
                <br />
                지금 바로 아 쑤바 모르겠다 나중에 바꾸자.
              </p>
            </div>
            <div className="login__line"></div>
            <div className="hidden__ele"></div>
          </div>
        </div>
        {!showMemberBox && (
          <div className="login__right">
            <div className="right__container">
              <div className="right__logo">
                <div className="logoImg"></div>
                <p className="logoText">
                  당신의 여유 속으로
                  <br />
                  드루와
                </p>
              </div>
              <div className="right__contolors">
                <div role="group" className="login__control">
                  <input
                    placeholder="email@email.com"
                    spellCheck="false"
                    autoComplete="off"
                    name="email"
                    id="loginEmail"
                    className="login__input__control"
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                  />
                </div>
                <div role="group" className="login__control">
                  <input
                    placeholder="password"
                    spellCheck="false"
                    autoComplete="off"
                    name="pass"
                    type="password"
                    id="loginPassword"
                    className="login__input__control"
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  className="login__button"
                  onClick={() => loginUser()}
                >
                  로그인
                </button>
                <div className="sub__controls">
                  <a
                    href="/"
                    onClick={(event) => handleSubBtnClick(event, "register")}
                  >
                    <button role="group" className="sub__btns">
                      <span className="sub__btns__text">회원가입</span>
                    </button>
                  </a>
                  <a
                    href="/"
                    onClick={(event) =>
                      handleSubBtnClick(event, "findPassword")
                    }
                  >
                    <button role="group" className="sub__btns">
                      <span className="sub__btns__text">비밀번호 찾기</span>
                    </button>
                  </a>
                  <a href="/">
                    <button role="group" className="sub__btns">
                      <span className="sub__btns__text">홈페이지</span>
                    </button>
                  </a>
                </div>
              </div>
              <div className="right__footer">
                <p className="login__agree">
                  위 버튼을 클릭하면 druwa의<span>서비스 이용 약관</span>과
                  <span>개인정보 취급방침</span>에 동의하게 됩니다.
                </p>
              </div>
            </div>
          </div>
        )}
        {showMemberBox && (
          <div className="member__box" style={{ display: "block" }}>
            <button onClick={(event) => handleSubBtnClick(event, "back")}>
              <svg viewBox="0 0 20 20" focusable="false" className="back__svg">
                <g clipPath="url(#clip0_1369_15544)">
                  <path
                    d="M20.0002 10.8336V9.16697L2.12932 9.1928L5.73099 5.58947L4.55266 4.41113L0.73099 8.2328C0.262312 8.70162 -0.000976563 9.33739 -0.000976562 10.0003C-0.000976563 10.6632 0.262312 11.299 0.73099 11.7678L4.55266 15.5895L5.73099 14.4111L2.17932 10.8595L20.0002 10.8336Z"
                    fill="currentColor"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_1369_15544">
                    <rect width="20" height="20" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </button>
            <div className="member__container">
              <div className="member__header">
                <h1 className="member__text">{memberText}</h1>
                <p className="member__sub__text">{memberSubText}</p>
              </div>
              {!verificationCheck && !userNameSet && (
                <div className="member__controls" role="group">
                  <label htmlFor="memberEmail">
                    <span className="controls__title">이메일 아이디</span>
                    <span className="controls__sub__title" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <input
                    placeholder="mail@mail.com"
                    spellCheck="false"
                    autoComplete="off"
                    name="email"
                    id="memberEmail"
                    required
                    aria-required="true"
                    className="member__email"
                    {...(isEmailSent && { readOnly: true })}
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                  />
                  {isEmailSent && (
                    <button
                      type="button"
                      className="resend__btn"
                      onClick={handleVerification}
                    >
                      인증 재전송
                    </button>
                  )}
                </div>
              )}
              {verificationCheck && (
                <>
                  <div className="member__controls">
                    <label htmlFor="memberPass">
                      <span className="controls__title">비밀번호</span>
                      <span className="controls__sub__title">*</span>
                    </label>
                    <input
                      placeholder="영문,숫자,특수문자 1개 포함 8자 이상"
                      spellCheck="false"
                      autoComplete="off"
                      name="password"
                      id="memberPass"
                      required
                      aria-required="true"
                      className="member__email"
                      value={userPassword}
                      onChange={(e) => setUserPassword(e.target.value)}
                    />
                  </div>
                  <div className="member__controls">
                    <label htmlFor="memberPassCheck">
                      <span className="controls__title">비밀번호 확인</span>
                      <span className="controls__sub__title">*</span>
                    </label>
                    <input
                      placeholder="영문,숫자,특수문자 1개 포함 8자 이상"
                      spellCheck="false"
                      autoComplete="off"
                      name="passwordCheck"
                      id="memberPassCheck"
                      required
                      aria-required="true"
                      className="member__email"
                      value={userPasswordCheck}
                      onChange={(e) => setUserPasswordCheck(e.target.value)}
                    />
                    {userPassword !== userPasswordCheck && (
                      <div className="alert__box">
                        <p className="alert__text">
                          입력한 비밀번호와 일치하지 않습니다.
                        </p>
                      </div>
                    )}
                  </div>
                </>
              )}
              {userNameSet && !lastStepCheck && (
                <div className="member__controls">
                  <label htmlFor="userName">
                    <span className="controls__title">닉네임</span>
                    <span className="controls__sub__title">*</span>
                  </label>
                  <input
                    placeholder="최대 32자까지 입력해주세요"
                    spellCheck="false"
                    autoComplete="off"
                    name="userName"
                    id="userName"
                    required
                    aria-required="true"
                    className="member__email"
                    value={userName}
                    onChange={(event) => setUserName(event.target.value)}
                  />
                  <div className="step__control">
                    <button
                      type="button"
                      className="prevStep step__ctl__btn"
                      onClick={() => setUserNameSet(false)}
                    >
                      이전으로
                    </button>
                    <button
                      type="button"
                      className="nextStep step__ctl__btn"
                      onClick={lastStepBtn}
                    >
                      다음으로
                    </button>
                  </div>
                </div>
              )}

              {lastStepCheck && (
                <>
                  <div className="member__controls">
                    <label htmlFor="userName">
                      <span className="controls__title">연락처</span>
                      <span className="controls__sub__title">*</span>
                    </label>
                    <input
                      placeholder="010-1234-5678"
                      spellCheck="false"
                      autoComplete="off"
                      name="userName"
                      id="userName"
                      required
                      aria-required="true"
                      className="member__email"
                      value={userPhone}
                      onChange={(event) => setUserPhone(event.target.value)}
                    />
                  </div>
                  <div className="member__controls">
                    <label htmlFor="userName">
                      <span className="controls__title">직무/직책</span>
                      <span className="controls__sub__title">*</span>
                    </label>
                    <input
                      placeholder="직무/직책을 선택해주세요"
                      spellCheck="false"
                      autoComplete="off"
                      name="userName"
                      id="userName"
                      required
                      aria-required="true"
                      className="member__email"
                      value={userType}
                      onChange={(event) => setUserType(event.target.value)}
                    />
                  </div>
                  <div className="agree__box">
                    <div className="agree__conts">
                      <p className="agree__text">
                        마케팅, 광고 수신 동의 (선택)
                      </p>
                      <label htmlFor="" className="agree__label">
                        <input type="text" className="agree__hidden__check" />
                        <span className="aggree__checkbox">
                          <div className="aggree__checkbox__box">
                            <FaCheckSquare />
                          </div>
                        </span>
                      </label>
                    </div>
                    <div className="agree__conts">
                      <p className="agree__text">
                        업데이트 및 혜택정보 이메일 수신 (선택)
                      </p>
                      <label htmlFor="" className="agree__label">
                        <input type="text" className="agree__hidden__check" />
                        <span className="aggree__checkbox">
                          <div className="aggree__checkbox__box">
                            <span className="aggree__checkbox">
                              <div className="aggree__checkbox__box">
                                <FaCheckSquare />
                              </div>
                            </span>
                          </div>
                        </span>
                      </label>
                    </div>
                    <div className="step__control">
                      <button
                        type="button"
                        className="prevStep step__ctl__btn"
                        onClick={() => setUserNameSet(false)}
                      >
                        이전으로
                      </button>
                      <button
                        type="button"
                        className="nextStep step__ctl__btn"
                        onClick={registerMember}
                      >
                        다음으로
                      </button>
                    </div>
                  </div>
                </>
              )}
              {isEmailSent && !verificationCheck && !userNameSet && (
                <div className="member__controls" role="group">
                  <p className="email_desc">
                    이메일로 전송된 인증코드를 입력해주세요.
                  </p>
                  <div className="verificationCodes">
                    {verificationCodes.map((code, index) => (
                      <input
                        key={index}
                        aria-label="Please enter your pin code"
                        inputMode="numeric"
                        type="text"
                        name={`code-${index}`}
                        id={`pin-input-${index}`}
                        autoComplete="off"
                        placeholder="○"
                        className="verification__code"
                        maxLength="1"
                        value={code}
                        onChange={(e) => handleVerificationCodeChange(e, index)}
                        ref={(el) => (inputRefs.current[index] = el)}
                        onKeyDown={handleKeyDown}
                      />
                    ))}
                  </div>
                </div>
              )}
              {!isEmailSent && (
                <button
                  type="button"
                  className="member__btn"
                  onClick={handleVerification}
                >
                  인증코드 보내기
                </button>
              )}
              {verificationCheck && (
                <button
                  type="button"
                  className="member__btn"
                  onClick={nextStepBtn}
                >
                  다음
                </button>
              )}
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Login;
