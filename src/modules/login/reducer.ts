import { createReducer } from "typesafe-actions";
import { UserProfileState, UserProfileAction } from "./types";
import { GET_USER_PROFILE_SUCCESS, GET_USER_PROFILE_ERROR } from "./actions";

const initialState: UserProfileState = {
  isLogin: false,
  error: null,
  data: null,
};

const login = createReducer<UserProfileState, UserProfileAction>(initialState, {
  [GET_USER_PROFILE_SUCCESS]: (state, action) => ({
    ...state,
    isLogin: false,
    data: action.payload,
  }),
  [GET_USER_PROFILE_ERROR]: (state, action) => ({
    ...state,
    isLogin: false,
    error: action.payload,
    data: null,
  }),
});

export default login;
