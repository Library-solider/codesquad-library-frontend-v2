import React, { useState } from "react";

import { FiMessageCircle } from "react-icons/fi";
import { LauncherWrapper, LauncherButton } from "./Launcher.element";

import LauncherToggle from "./LauncherToggle";

function Launcher() {
  const [isOpen, setIsOpen] = useState(false);

  function handlerOpenToggle() {
    setIsOpen(true);
  }

  function handlerCloseToggle() {
    setIsOpen(false);
  }

  return (
    <div>
      <LauncherWrapper>
        {!isOpen && (
          <LauncherButton onClick={handlerOpenToggle}>
            <FiMessageCircle />
          </LauncherButton>
        )}
        {isOpen && (
          <LauncherToggle isOpen={isOpen} onClose={handlerCloseToggle} />
        )}
      </LauncherWrapper>
    </div>
  );
}

export default Launcher;
