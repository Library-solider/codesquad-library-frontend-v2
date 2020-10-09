import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../modules/index";
import getUserProfileTunk from "../../modules/login/thunks";

import { LoginButton } from "./Login.element";

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
    <div>
      <LoginButton>
        {isLogin ? (
          <div>
            <img src={data.data.avatarUrl} alt="User Profile" />
          </div>
        ) : (
          <Link to={GITHUB_OAUTH_LINK}>Login</Link>
        )}
      </LoginButton>
    </div>
  );
}

export default Login;
