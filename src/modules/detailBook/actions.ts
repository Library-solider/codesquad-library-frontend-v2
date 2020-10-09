import { createAsyncAction } from "typesafe-actions";
import { AxiosError } from "axios";
import { IDetailBook } from "../../api/detailBook";

export const GET_DETAIL_BOOK_DATA = "detailBook/GET_DETAIL_BOOKS_DATA";
export const GET_DETAIL_BOOK_DATA_SUCCESS =
  "detailBook/GET_DETAIL_BOOKS_DATA_SUCCESS";
export const GET_DETAIL_BOOK_DATA_ERROR =
  "detailBook/GET_DETAIL_BOOKS_DATA_ERROR";

export const getDetailBookAsync = createAsyncAction(
  GET_DETAIL_BOOK_DATA,
  GET_DETAIL_BOOK_DATA_SUCCESS,
  GET_DETAIL_BOOK_DATA_ERROR
)<undefined, IDetailBook, AxiosError>();
