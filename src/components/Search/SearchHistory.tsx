import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../modules/index";
import { resetStateSearchHistory } from "../../modules/search/index";

import { SearchHistoryWrapper } from "./Search.element";

import HistoryItem from "./HistoryItem";

function SearchHistory() {
  const dispatch = useDispatch();
  const { searchHistory, currentPosition } = useSelector(
    (state: RootState) => state.search
  );

  function onClearHistory(): void {
    dispatch(resetStateSearchHistory());
  }

  return (
    <SearchHistoryWrapper>
      <li>최근 검색어</li>
      {searchHistory.length ? (
        (searchHistory as Array<string>).map((el: string, idx: number) => {
          return <HistoryItem keyword={el} positionIndex={idx} />;
        })
      ) : (
        <li className="none-searh-history">검색 결과가 없습니다.</li>
      )}
      <li className="clear-all-history" onClick={onClearHistory}>
        전체 삭제
      </li>
    </SearchHistoryWrapper>
  );
}

export default SearchHistory;
