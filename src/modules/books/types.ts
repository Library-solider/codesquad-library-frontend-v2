import { AxiosError } from "axios";
import { ActionType } from "typesafe-actions";
import * as actions from "./actions";
import IBooks from "../../api/books";

export type BooksAction = ActionType<typeof actions>;

export interface BooksState {
  loading: boolean;
  error: AxiosError | null;
  data: IBooks | null;
}
