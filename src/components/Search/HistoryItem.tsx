import React from "react";
import { RiCloseLine } from "react-icons/ri";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../modules/index";
import { updateCurrentPosition } from "../../modules/search/index";

import { HistoryItemWrapper } from "./Search.element";

interface IHistoryItem {
  keyword: string;
  positionIndex: number;
}

function HistoryItem({ keyword, positionIndex }: IHistoryItem) {
  const dispatch = useDispatch();
  const { currentPosition } = useSelector((state: RootState) => state.search);

  function onMouseOverHistoryItem() {
    dispatch(updateCurrentPosition(positionIndex));
  }

  return (
    <HistoryItemWrapper
      key={positionIndex}
      isFocusing={currentPosition === positionIndex ? true : false}
      onMouseOver={onMouseOverHistoryItem}
    >
      <p>{keyword}</p>
    </HistoryItemWrapper>
  );
}

export default HistoryItem;
