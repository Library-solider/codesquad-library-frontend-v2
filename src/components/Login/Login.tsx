import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../modules/index";
import getUserProfileTunk from "../../modules/login/thunks";

import { LoginWrapper } from "./Login.element";
import { Button } from "../../styles/Button";

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
      {isLogin ? (
        <div className="user-info">
          <img src={data.data.avatarUrl} alt="User Profile" />
        </div>
      ) : (
        <Button>
          <Link to={GITHUB_OAUTH_LINK}>Login</Link>
        </Button>
      )}
    </LoginWrapper>
  );
}

export default Login;
