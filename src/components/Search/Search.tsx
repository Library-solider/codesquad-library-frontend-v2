import React from "react";

import { FiSearch } from "react-icons/fi";
import { SearchWrapper } from "./Search.element";

function Search() {
  return (
    <SearchWrapper>
      <input type="text" placeholder="제목,저자를 검색해 보세요." />
      <FiSearch />
    </SearchWrapper>
  );
}

export default Search;
