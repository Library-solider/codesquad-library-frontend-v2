import React from "react";
import ReactDOM from "react-dom";
import { DimmedLayer, ModalWrapper } from "./Modal.element";

interface IModal {
  children: React.ReactNode;
}

function Modal({ children }: IModal) {
  return ReactDOM.createPortal(
    <>
      <DimmedLayer />
      <ModalWrapper>{children}</ModalWrapper>
    </>,
    document.getElementById("root")
  );
}

export default Modal;
