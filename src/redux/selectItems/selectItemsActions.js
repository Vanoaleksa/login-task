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

  selectCheckbox(selectItems) {
    return {
      type: SELECTCHECKBOX,
      payload: { selectItems},
    };
  },
  getItems(selectItems){
    return{
      type: GET_ITEMS,
      payload: {selectItems}
    }
  },

  addItem(selectItems){
    return{
      type:ADD_ITEM,
      payload: {selectItems}
    }
  },

  deleteItem(selectItems){
    return{
      type:DELETE_ITEM,
      payload: {selectItems}
    }
  },

  updateItem(selectItems){
    return{
      type:UPDATE_ITEM,
      payload: {selectItems}
    }
  },
  
};
