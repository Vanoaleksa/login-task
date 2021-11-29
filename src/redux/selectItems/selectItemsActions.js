import {
  SELECTCHECKBOX,
  SELECT_ITEMS,
  CLEAR_ITEMS,
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM,
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

  selectcheckbox(selectItems) {
    return {
      type: SELECTCHECKBOX,
      payload: { selectItems},
    };
  },
  getitems(selectItems){
    return{
      type: GET_ITEMS,
      payload: {selectItems}
    }
  },

  additem(selectItems){
    return{
      type:ADD_ITEM,
      payload: {selectItems}
    }
  },

  deleteitem(selectItems){
    return{
      type:DELETE_ITEM,
      payload: {selectItems}
    }
  },

  updateitem(selectItems){
    return{
      type:UPDATE_ITEM,
      payload: {selectItems}
    }
  },
  
};
