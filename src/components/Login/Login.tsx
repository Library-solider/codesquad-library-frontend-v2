import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../modules/index";
import getUserProfileTunk from "../../modules/login/thunks";

import { LoginWrapper } from "./Login.element";
import { Button } from "../../styles/Button";

import LoginMobileViewer from "./LoginMobileViewer";

import { GITHUB_OAUTH_LINK } from "../../constants/login";

function Login() {
  const dispatch = useDispatch();
  const { isLogin, error, data } = useSelector(
    (state: RootState) => state.login
  );

  useEffect(() => {
    dispatch(getUserProfileTunk(process.env.REACT_APP_USER_PROFILE_API));
  }, [dispatch]);

  return (
    <LoginWrapper>
      <div className="desktop-login-viewer">
        {isLogin ? (
          <div className="user-info">
            <img src={data.data.avatarUrl} alt="User Profile" />
          </div>
        ) : (
          <Button>
            <a href={GITHUB_OAUTH_LINK}>로그인</a>
          </Button>
        )}
      </div>
      <LoginMobileViewer />
    </LoginWrapper>
  );
}

export default Login;
