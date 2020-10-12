import { ActionType } from "typesafe-actions";
import * as actions from "./actions";
import { IMypage } from "../../api/mypage";

export type MypageAction = ActionType<typeof actions>;

export interface MypageState {
  loading: boolean;
  error: Error | null;
  data: IMypage | null;
}
