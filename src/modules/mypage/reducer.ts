import { createReducer } from "typesafe-actions";
import { MypageState, MypageAction } from "./types";
import {
  GET_MYPAGE_DATA,
  GET_MYPAGE_DATA_ERROR,
  GET_MYPAGE_DATA_SUCCESS,
} from "./actions";

const initialState: MypageState = {
  loading: false,
  error: null,
  data: null,
};

const mypage = createReducer<MypageState, MypageAction>(initialState, {
  [GET_MYPAGE_DATA]: (state) => ({
    ...state,
    loading: true,
  }),
  [GET_MYPAGE_DATA_SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
    data: action.payload,
  }),
  [GET_MYPAGE_DATA_ERROR]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
    data: null,
  }),
});

export default mypage;
