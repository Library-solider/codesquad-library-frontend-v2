import React from "react";
import { Link } from "react-router-dom";
import { FcNoIdea } from "react-icons/fc";
import { LoginErrorWrapper } from "./ErrorPage.element";

function LoginError() {
  return (
    <LoginErrorWrapper>
      <FcNoIdea />
      <h2>로그인 시 이용 가능한 페이지입니다.</h2>
      <Link to="/">홈으로 돌아가기</Link>
    </LoginErrorWrapper>
  );
}

export default LoginError;
