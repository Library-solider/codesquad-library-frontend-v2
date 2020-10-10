import { ActionType, createReducer } from "typesafe-actions";

const SET_SEARCH_HISTORY = "search/SET_SEARCH_HISTORY" as const;
const RESET_STATE_SEARCH_HISTORY = "search/RESET_STATE_SEARCH_HISTORY" as const;
const UPDATE_STATE_SEARCH_HISTORY = "search/UPDATE_STATE_SEARCH_HISTORY" as const;

const UPDATE_KEYWORD = "search/UPDATE_KEYWORD" as const;
const UPDATE_CURRENT_POSITION = "search/UPDATE_CURRENT_POSITION" as const;

export function setSearchHistory(historyArr: Array<string> | []) {
  return {
    type: SET_SEARCH_HISTORY,
    payload: historyArr,
  };
}
export function resetStateSearchHistory() {
  return {
    type: RESET_STATE_SEARCH_HISTORY,
  };
}
export function updateStateSearchHistory() {
  return {
    type: UPDATE_STATE_SEARCH_HISTORY,
  };
}

export function updateKeyword(keyword: string) {
  return {
    type: UPDATE_KEYWORD,
    payload: keyword,
  };
}

export function updateCurrentPosition(position: number | null) {
  return {
    type: UPDATE_CURRENT_POSITION,
    payload: position,
  };
}

const actions = {
  setSearchHistory,
  resetStateSearchHistory,
  updateKeyword,
  updateStateSearchHistory,
  updateCurrentPosition,
};
type SearchAction = ActionType<typeof actions>;

interface SearchState {
  keyword: string;
  searchHistory: Array<string> | [];
  currentPosition: number | null;
}

const initialState: SearchState = {
  keyword: "",
  searchHistory: [],
  currentPosition: null,
};

const search = createReducer<SearchState, SearchAction>(initialState, {
  [SET_SEARCH_HISTORY]: (state, action) => ({
    ...state,
    searchHistory: action.payload,
  }),
  [RESET_STATE_SEARCH_HISTORY]: (state) => ({
    ...state,
    currentPosition: null,
    searchHistory: [],
  }),
  [UPDATE_STATE_SEARCH_HISTORY]: (state) => ({
    ...state,
    searchHistory: [...new Set([state.keyword, ...state.searchHistory])].slice(
      0,
      5
    ),
  }),
  [UPDATE_KEYWORD]: (state, action) => ({
    ...state,
    keyword: action.payload,
  }),
  [UPDATE_CURRENT_POSITION]: (state, action) => ({
    ...state,
    currentPosition: action.payload,
  }),
});

export default search;
