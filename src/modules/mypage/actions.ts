import { createAsyncAction } from "typesafe-actions";
import { AxiosError } from "axios";
import { IMypage } from "../../api/mypage";

export const GET_MYPAGE_DATA = "mypage/GET_MYPAGE_DATA";
export const GET_MYPAGE_DATA_SUCCESS = "mypage/GET_MYPAGE_DATA_SUCCESS";
export const GET_MYPAGE_DATA_ERROR = "mypage/GET_MYPAGE_DATA_ERROR";

export const getMypageAsync = createAsyncAction(
  GET_MYPAGE_DATA,
  GET_MYPAGE_DATA_SUCCESS,
  GET_MYPAGE_DATA_ERROR
)<undefined, IMypage, AxiosError>();
