import { createReducer } from "typesafe-actions";
import { DetailBookAction, DetailBookState } from "./types";
import {
  GET_DETAIL_BOOK_DATA,
  GET_DETAIL_BOOK_DATA_SUCCESS,
  GET_DETAIL_BOOK_DATA_ERROR,
} from "./actions";

const initialState: DetailBookState = {
  loading: false,
  error: null,
  data: null,
};

const detailBook = createReducer<DetailBookState, DetailBookAction>(
  initialState,
  {
    [GET_DETAIL_BOOK_DATA]: (state) => ({
      ...state,
      loading: true,
    }),
    [GET_DETAIL_BOOK_DATA_SUCCESS]: (state, action) => ({
      ...state,
      loading: false,
      data: action.payload,
    }),
    [GET_DETAIL_BOOK_DATA_ERROR]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
      data: null,
    }),
  }
);

export default detailBook;
