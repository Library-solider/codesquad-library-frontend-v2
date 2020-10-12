import { combineReducers } from "redux";
import books from "./books/reducer";
import detailbook from "./detailBook/reducer";
import login from "./login/reducer";
import search from "./search/index";
import mypage from "./mypage/reducer";

const rootReducer = combineReducers({
  books,
  detailbook,
  login,
  search,
  mypage,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
