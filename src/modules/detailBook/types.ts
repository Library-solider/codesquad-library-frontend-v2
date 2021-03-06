import { ActionType } from "typesafe-actions";
import { AxiosError } from "axios";
import * as actions from "./actions";
import { IDetailBook } from "../../api/detailBook";

export type DetailBookAction = ActionType<typeof actions>;

export interface DetailBookState {
  loading: boolean;
  error: AxiosError | null;
  data: IDetailBook | null;
}
