import React, { createContext, useState, useContext } from "react";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMainText, setModalMainText] = useState("");
  const [modalSubText, setModalSubText] = useState("");

  const openModal = (mainText, subText) => {
    setModalMainText(mainText);
    setModalSubText(subText);
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider
      value={{ isOpen, modalMainText, modalSubText, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};
