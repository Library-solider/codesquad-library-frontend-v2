import React, { useState, useRef, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../modules/index";
import {
  setSearchHistory,
  updateStateSearchHistory,
  updateKeyword,
  updateCurrentPosition,
} from "../../modules/search/index";

import { SearchWrapper } from "./Search.element";

import SearchHistory from "./SearchHistory";
import {
  SEARCH_HISTORY_KEY,
  HISTORY_FIRST_INDEX,
} from "../../constants/localStorage";

function Search() {
  const history = useHistory();

  const toggleContainer = useRef<HTMLDivElement>();
  const [isToggle, setIsToggle] = useState(false);

  const dispatch = useDispatch();
  const { searchHistory, keyword, currentPosition } = useSelector(
    (state: RootState) => state.search
  );

  const recordHistory = localStorage.getItem(SEARCH_HISTORY_KEY);
  const currentHistory = recordHistory ? JSON.parse(recordHistory) : [];

  function onBlurSearchHistory(e: any) {
    if (isToggle && !toggleContainer.current.contains(e.target)) {
      setIsToggle(false);
      dispatch(updateCurrentPosition(null));
    }
  }

  function onFocusInput() {
    setIsToggle(true);
  }

  function onChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(updateKeyword(e.target.value));
  }

  function onKeydownInput(e: React.KeyboardEvent<HTMLInputElement>) {
    switch (e.key) {
      case "Enter":
        if (keyword) {
          dispatch(updateStateSearchHistory());
          history.push(`/search?q=${keyword}`);
          setIsToggle(false);
          e.currentTarget.blur();
        }
        break;
      case "ArrowDown":
        if (currentPosition === null && searchHistory.length) {
          dispatch(updateCurrentPosition(HISTORY_FIRST_INDEX));
        } else if (currentPosition === searchHistory.length - 1) {
          dispatch(updateCurrentPosition(null));
        } else {
          dispatch(updateCurrentPosition(currentPosition + 1));
        }
        break;
      case "ArrowUp":
        if (currentPosition === null && searchHistory.length) {
          dispatch(updateCurrentPosition(searchHistory.length - 1));
        } else if (currentPosition === HISTORY_FIRST_INDEX) {
          dispatch(updateCurrentPosition(null));
        } else {
          dispatch(updateCurrentPosition(currentPosition - 1));
        }
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    dispatch(setSearchHistory(currentHistory));
  }, []);

  useEffect(() => {
    localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(searchHistory));
  }, [searchHistory]);

  useEffect(() => {
    if (currentPosition === null) dispatch(updateKeyword(""));
    if (currentPosition !== null)
      dispatch(updateKeyword(searchHistory[currentPosition]));
  }, [currentPosition]);

  useEffect(() => {
    window.addEventListener("click", onBlurSearchHistory);

    return () => {
      window.removeEventListener("click", onBlurSearchHistory);
    };
  });

  return (
    <SearchWrapper ref={toggleContainer}>
      <input
        type="text"
        placeholder="제목,저자를 검색해 보세요."
        onFocus={onFocusInput}
        onChange={onChangeInput}
        onKeyDown={onKeydownInput}
        value={keyword}
      />
      <FiSearch />
      {isToggle && <SearchHistory />}
    </SearchWrapper>
  );
}

export default Search;
