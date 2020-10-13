import React from "react";
import { Link } from "react-router-dom";

import { IconType } from "react-icons";
import { CustomErrorWrapper } from "./ErrorPage.element";

interface ICustomError {
  Icon: IconType;
  content: string;
}

function CustomError({ Icon, content }: ICustomError) {
  return (
    <CustomErrorWrapper>
      <Icon />
      <h2>{content}</h2>
      <Link to="/">홈으로 돌아가기</Link>
    </CustomErrorWrapper>
  );
}

export default CustomError;
