import React from "react";
import { Link } from "react-router-dom";

import { CategoryToggleWrapper } from "./Header.element";

const CategoryToggle = () => {
  return (
    <CategoryToggleWrapper>
      <li>
        <Link to="/category/3">백엔드</Link>
      </li>
      <li>
        <Link to="/category/1">프론트엔드</Link>
      </li>
      <li>
        <Link to="/category/4">모바일</Link>
      </li>
      <li>
        <Link to="/category/5">컴퓨터공학</Link>
      </li>
      <li>
        <Link to="/category/2">교양</Link>
      </li>
    </CategoryToggleWrapper>
  );
};

export default CategoryToggle;
