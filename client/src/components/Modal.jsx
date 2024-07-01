import React from "react";
import ReactModal from "react-modal";
import { useModal } from "../context/ModalContext";
import "../assets/scss/_modal.scss";

const Modal = ({ mainText, subText }) => {
  console.log(mainText, subText);

  const { isOpen, closeModal } = useModal();

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      className="modalContent" // SCSS 클래스 적용
      overlayClassName="overlay"
    >
      <svg
        viewBox="0 0 60 60"
        focusable="false"
        class="chakra-icon chakra-icon css-vlk5b1"
      >
        <circle
          cx="30"
          cy="42"
          r="7"
          fill="white"
          stroke="black"
          stroke-width="2"
        ></circle>
        <mask id="path-2-inside-1_3049_89691" fill="white">
          <path d="M16 60C16 53.3726 21.3726 48 28 48H32C38.6274 48 44 53.3726 44 60H16Z"></path>
        </mask>
        <path
          d="M16 60C16 53.3726 21.3726 48 28 48H32C38.6274 48 44 53.3726 44 60H16Z"
          fill="#2C74FF"
        ></path>
        <path
          d="M14 60C14 52.268 20.268 46 28 46H32C39.732 46 46 52.268 46 60H42C42 54.4772 37.5228 50 32 50H28C22.4772 50 18 54.4772 18 60H14ZM44 60H16H44ZM14 60C14 52.268 20.268 46 28 46V50C22.4772 50 18 54.4772 18 60H14ZM32 46C39.732 46 46 52.268 46 60H42C42 54.4772 37.5228 50 32 50V46Z"
          fill="black"
          mask="url(#path-2-inside-1_3049_89691)"
        ></path>
        <rect
          x="28"
          y="3"
          width="4"
          height="18"
          fill="#2C74FF"
          stroke="black"
          stroke-width="2"
        ></rect>
        <rect
          x="28"
          y="25"
          width="4"
          height="4"
          fill="#2C74FF"
          stroke="black"
          stroke-width="2"
        ></rect>
      </svg>
      <p className="modal__text">{mainText}</p>
      <p className="modal__sub__text">{subText}</p>
      <button type="button" className="modal__btn" onClick={closeModal}>
        확인
      </button>
    </ReactModal>
  );
};

export default Modal;
