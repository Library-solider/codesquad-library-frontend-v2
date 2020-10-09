import { createReducer } from "typesafe-actions";
import { BooksState, BooksAction } from "./types";
import {
  GET_BOOKS_DATA,
  GET_BOOKS_DATA_SUCCESS,
  GET_BOOKS_DATA_ERROR,
} from "./actions";

const initialState: BooksState = {
  loading: false,
  error: null,
  data: null,
};

const books = createReducer<BooksState, BooksAction>(initialState, {
  [GET_BOOKS_DATA]: (state) => ({
    ...state,
    loading: true,
  }),
  [GET_BOOKS_DATA_SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
    data: action.payload,
  }),
  [GET_BOOKS_DATA_ERROR]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
    data: null,
  }),
});

export default books;
