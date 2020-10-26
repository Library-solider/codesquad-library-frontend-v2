import React from "react";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { RootState } from "../../modules/index";

import { CategoryToggleWrapper } from "./Login.element";

import categoryListData from "../../data/bookCategory";
import { GITHUB_OAUTH_LINK } from "../../constants/login";

interface ICategoryToggle {
  onCloseToggle: () => void;
}

function CategoryToggle({ onCloseToggle }: ICategoryToggle) {
  const { isLogin } = useSelector((state: RootState) => state.login);

  return (
    <CategoryToggleWrapper>
      <li onClick={onCloseToggle}>
        <MdClose />
      </li>
      {!isLogin && (
        <li>
          <a href={GITHUB_OAUTH_LINK}>로그인</a>
        </li>
      )}
      <li onClick={onCloseToggle}>
        <Link to="/mypage">마이페이지</Link>
      </li>
      {categoryListData.map((el) => {
        return (
          <li key={el.categoryId} onClick={onCloseToggle}>
            <Link to={el.href}>{el.categoryTitle}</Link>
          </li>
        );
      })}
    </CategoryToggleWrapper>
  );
}

export default CategoryToggle;
