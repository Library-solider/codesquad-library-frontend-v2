import { createAsyncAction } from "typesafe-actions";
import { AxiosError } from "axios";
import IBooks from "../../api/books";

export const GET_BOOKS_DATA = "books/GET_BOOKS_DATA";
export const GET_BOOKS_DATA_SUCCESS = "books/GET_BOOKS_DATA_SUCCESS";
export const GET_BOOKS_DATA_ERROR = "books/GET_BOOKS_DATA_ERROR";

export const getBooksAsync = createAsyncAction(
  GET_BOOKS_DATA,
  GET_BOOKS_DATA_SUCCESS,
  GET_BOOKS_DATA_ERROR
)<undefined, IBooks, AxiosError>();
