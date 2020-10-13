import React from "react";
import { FcSettings } from "react-icons/fc";
import { Link } from "react-router-dom";
import { ErrorPageWrapper } from "./ErrorPage.element";

interface IErrorPage {
  status: number;
}

function ErrorPage({ status }: IErrorPage) {
  return (
    <ErrorPageWrapper>
      <FcSettings />
      <h2>{status} Error !</h2>
      <Link to="/">홈으로 돌아가기</Link>
    </ErrorPageWrapper>
  );
}

export default ErrorPage;
