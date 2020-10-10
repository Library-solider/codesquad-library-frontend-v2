import React from "react";
import { Link } from "react-router-dom";

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
            <Link to="/">
              <img src={codesquad_logo} alt="codesquad logo" />
            </Link>
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
