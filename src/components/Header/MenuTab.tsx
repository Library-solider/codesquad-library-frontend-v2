import React, { useState } from "react";

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
        <p>MyBook</p>
      </li>
      <li>
        <p>Infomation</p>
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
