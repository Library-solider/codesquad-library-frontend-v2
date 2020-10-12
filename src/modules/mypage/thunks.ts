import { ThunkAction } from "redux-thunk";
import { RootState } from "../index";
import { MypageAction } from "./types";
import { getMypage } from "../../api/mypage";
import { getMypageAsync } from "./actions";

function getMypageThunk(
  url: string
): ThunkAction<void, RootState, null, MypageAction> {
  return async (dispatch) => {
    const { request, success, failure } = getMypageAsync;
    dispatch(request("", ""));
    try {
      const books = await getMypage(url);
      dispatch(success(books));
    } catch (error) {
      dispatch(failure(error));
    }
  };
}

export default getMypageThunk;
