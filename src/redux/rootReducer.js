import { combineReducers } from "redux";
import { selectItemsReducer } from "./selectItems/selectItemsReducer";

const appReducer = combineReducers({
  selectItems: selectItemsReducer,
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
