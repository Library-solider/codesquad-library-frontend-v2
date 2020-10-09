import { createAsyncAction } from "typesafe-actions";
import { AxiosError } from "axios";
import { ILogin } from "../../api/login";

export const GET_USER_PROFILE_DATA = "books/GET_BOOKS_DATA";
export const GET_USER_PROFILE_SUCCESS = "login/GET_USER_PROFILE_SUCCESS";
export const GET_USER_PROFILE_ERROR = "login/GET_USER_PROFILE_ERROR";

export const getUserProfileAsync = createAsyncAction(
  GET_USER_PROFILE_DATA,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_ERROR
)<undefined, ILogin, AxiosError>();
