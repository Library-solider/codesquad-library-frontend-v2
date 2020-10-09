import { ThunkAction } from "redux-thunk";
import { RootState } from "../index";
import { UserProfileAction } from "./types";
import { getUserProfile } from "../../api/login";
import { getUserProfileAsync } from "./actions";

function getUserProfileThunk(
  url: string
): ThunkAction<void, RootState, null, UserProfileAction> {
  return async (dispatch) => {
    const { request, success, failure } = getUserProfileAsync;
    dispatch(request("", ""));
    try {
      const userProfile = await getUserProfile(url);
      dispatch(success(userProfile));
    } catch (error) {
      dispatch(failure(error));
    }
  };
}

export default getUserProfileThunk;
