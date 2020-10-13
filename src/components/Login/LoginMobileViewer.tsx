import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import { LoginMobileViewerWrapper } from "./Login.element";
import { DimmedLayer } from "../Modal/Modal.element";

import CategoryToggle from "./CategoryToggle";

function LoginMobileViewer() {
  const [isOpen, setIsOpen] = useState(false);

  function onClickToggleBtn() {
    setIsOpen(true);
  }

  function onCloseToggle() {
    setIsOpen(false);
  }

  return (
    <LoginMobileViewerWrapper>
      <GiHamburgerMenu onClick={onClickToggleBtn} />
      {isOpen && (
        <>
          <DimmedLayer />
          <CategoryToggle onCloseToggle={onCloseToggle} />
        </>
      )}
    </LoginMobileViewerWrapper>
  );
}

export default LoginMobileViewer;
