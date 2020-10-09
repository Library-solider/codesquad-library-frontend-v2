import { combineReducers } from "redux";
import books from "./books/reducer";
import detailbook from "./detailBook/reducer";
import login from "./login/reducer";

const rootReducer = combineReducers({
  books,
  detailbook,
  login,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
