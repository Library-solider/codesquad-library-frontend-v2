import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MenuTabWrapper } from "./Header.element";

import CategoryToggle from "./CategoryToggle";

function MenuTab() {
  const [isToggle, setIsToggle] = useState(false);

  const onCloseToggle = () => setIsToggle(false);
  const onToggle = () => setIsToggle(true);

  return (
    <MenuTabWrapper>
      <li>
        <Link to="/mypage">MyBook</Link>
      </li>
      <li
        className="category-tab"
        onMouseEnter={onToggle}
        onMouseLeave={onCloseToggle}
      >
        <p>Category</p>
        <MdKeyboardArrowDown />
        {isToggle && <CategoryToggle />}
      </li>
    </MenuTabWrapper>
  );
}

export default MenuTab;
