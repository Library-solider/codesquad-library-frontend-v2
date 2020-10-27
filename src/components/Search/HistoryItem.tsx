import React from "react";
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../modules/index";
import { updateCurrentPosition } from "../../modules/search/index";

import { HistoryItemWrapper } from "./Search.element";

interface IHistoryItem {
  keyword: string;
  positionIndex: number;
}

function HistoryItem({ keyword, positionIndex }: IHistoryItem) {
  const history = useHistory();

  const dispatch = useDispatch();
  const { currentPosition } = useSelector((state: RootState) => state.search);

  function onMouseOverHistoryItem() {
    dispatch(updateCurrentPosition(positionIndex));
  }

  function onClickHistoryItem() {
    history.push(`/search?q=${keyword}`);
  }

  return (
    <HistoryItemWrapper
      key={positionIndex}
      isFocusing={currentPosition === positionIndex ? true : false}
      onMouseOver={onMouseOverHistoryItem}
      onClick={onClickHistoryItem}
    >
      <p>{keyword}</p>
    </HistoryItemWrapper>
  );
}

export default HistoryItem;
