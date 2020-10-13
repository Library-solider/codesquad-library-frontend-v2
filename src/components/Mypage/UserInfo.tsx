import React from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

import { useSelector } from "react-redux";
import { RootState } from "../../modules/index";

import { UserInfoWrapper, LogoutButton } from "./Mypage.element";

function UserInfo() {
  const history = useHistory();
  const [cookies, setCookie, removeCookie] = useCookies(["JSESSIONID"]);
  const { data } = useSelector((state: RootState) => state.mypage);

  function onClickLogout() {
    removeCookie("JSESSIONID", {
      path: "/",
      domain: "backend.librarycodesquad.com",
    });
    history.push("/");
  }

  return (
    <UserInfoWrapper>
      <div className="user-info-left">
        <img src={data.data.avatarUrl} alt="User Profile" />
        <div>
          <p className="user-name">{data.data.name}</p>
          <p className="user-email">{data.data.email}</p>
        </div>
      </div>
      <LogoutButton onClick={onClickLogout}>로그아웃</LogoutButton>
    </UserInfoWrapper>
  );
}

export default UserInfo;
