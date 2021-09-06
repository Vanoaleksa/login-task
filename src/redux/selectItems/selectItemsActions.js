import {
  SELECTCHECKBOX,
  SELECT_ITEMS,
  CLEAR_ITEMS,
} from "./selectItemsConstans";

export const selectItemsActions = {
  select(selectItems) {
    return {
      type: SELECT_ITEMS,
      payload: { selectItems },
    };
  },

  clear(selectItems) {
    return {
      type: CLEAR_ITEMS,
      payload: { selectItems },
    };
  },

  selectcheckbox(selectItems, props) {
    return {
      type: SELECTCHECKBOX,
      payload: { selectItems, props },
    };
  },
};
