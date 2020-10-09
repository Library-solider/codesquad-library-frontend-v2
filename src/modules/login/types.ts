import { ActionType } from "typesafe-actions";
import * as actions from "./actions";
import { ILogin } from "../../api/login";

export type UserProfileAction = ActionType<typeof actions>;

export interface UserProfileState {
  isLogin: boolean;
  error: Error | null;
  data: ILogin | null;
}
