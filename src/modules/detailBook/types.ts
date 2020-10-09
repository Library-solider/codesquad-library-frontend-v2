import { ActionType } from "typesafe-actions";
import * as actions from "./actions";
import { IDetailBook } from "../../api/detailBook";

export type DetailBookAction = ActionType<typeof actions>;

export interface DetailBookState {
  loading: boolean;
  error: Error | null;
  data: IDetailBook | null;
}
