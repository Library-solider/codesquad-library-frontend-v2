import { ThunkAction } from "redux-thunk";
import { RootState } from "../index";
import { BooksAction } from "./types";
import { getBooks } from "../../api/books";
import { getBooksAsync } from "./actions";

function getBooksThunk(
  url: string
): ThunkAction<void, RootState, null, BooksAction> {
  return async (dispatch) => {
    const { request, success, failure } = getBooksAsync;
    dispatch(request("", ""));
    try {
      const books = await getBooks(url);
      dispatch(success(books));
    } catch (error) {
      dispatch(failure(error));
    }
  };
}

export default getBooksThunk;
