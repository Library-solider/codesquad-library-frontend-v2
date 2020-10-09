import { ThunkAction } from "redux-thunk";
import { RootState } from "../index";
import { DetailBookAction } from "./types";
import { getDetailBookAsync } from "./actions";
import { getDetailBook } from "../../api/detailBook";

function getDetailBookThunk(
  url: string
): ThunkAction<void, RootState, null, DetailBookAction> {
  return async (dispatch) => {
    const { request, success, failure } = getDetailBookAsync;
    dispatch(request("", ""));
    try {
      const books = await getDetailBook(url);
      dispatch(success(books));
    } catch (error) {
      dispatch(failure(error));
    }
  };
}

export default getDetailBookThunk;
