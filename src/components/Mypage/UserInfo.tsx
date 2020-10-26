import React from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../modules/index";

import { UserInfoWrapper } from "./Mypage.element";

function UserInfo() {
  const { data } = useSelector((state: RootState) => state.mypage);

  return (
    <UserInfoWrapper>
      <div className="user-info-left">
        <img src={data.data.avatarUrl} alt="User Profile" />
        <div>
          <p className="user-name">{data.data.name}</p>
          <p className="user-email">{data.data.email}</p>
        </div>
      </div>
    </UserInfoWrapper>
  );
}

export default UserInfo;
