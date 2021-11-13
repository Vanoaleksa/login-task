import {
  CLEAR_ITEMS,
  SELECTCHECKBOX,
  SELECT_ITEMS,
} from "./selectItemsConstans";

const initialState = {
  selectItems: [],
};

export const selectItemsReducer = (state = initialState, action) => {
  console.log("initialstateREDUCER", state);
 
  
  switch (action.type) {
    case SELECT_ITEMS:
      let payload = action.payload.selectItems;
      return {
        ...state,
        selectItems: payload,
      };
    case CLEAR_ITEMS:
      return {
        ...state,
        selectItems: [],
      };
    case SELECTCHECKBOX:
      let selectItems = action.payload.selectItems;
      // let selectItems = state.selectItems;
      console.log("selectItems", selectItems);
      // console.log("actionItem", actionItem);

      return {
        ...state,selectItems:selectItems
      };

    default:
      return state;
  }
};
