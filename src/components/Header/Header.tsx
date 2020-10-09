import React from "react";

import codesquad_logo from "../../assets/images/codesquad-logo.png";
import {
  HeaderWrapper,
  HeaderContainer,
  LoginButton,
  HeaderTop,
} from "./Header.element";

import Search from "../Search/Search";
import MenuTab from "./MenuTab";
import Login from "../Login/Login";

function Header() {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderTop>
          <div className="header-left">
            <img src={codesquad_logo} alt="codesquad logo" />
            <MenuTab />
          </div>
          <Login />
        </HeaderTop>
        <Search />
      </HeaderContainer>
    </HeaderWrapper>
  );
}

export default Header;
