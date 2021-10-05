import { CLEAR_ITEMS, SELECTCHECKBOX, SELECT_ITEMS } from "./selectItemsConstans";

const initialState = {
  selectItems: null,
};

export const selectItemsReducer = (state = initialState, action) => {
  console.log("initialstateREDUCER", state);
  switch (action.type) {
    case SELECT_ITEMS:
      let payload = action.payload;
      console.log('payload', payload)
      return {
        ...state,
        selectItems: payload,
      };
    case CLEAR_ITEMS:
      return {
        ...state,
        selectItems: null,
      };
    case SELECTCHECKBOX:
      let oldArray = action.payload.selectItems;
      console.log('old',oldArray)
      let newArray = oldArray;
      let sendArray = newArray.map((el) => { 
      {el.el.isChecked = true ? (el) : null};
    
      }) 
  
      return {
        ...state,selectItems:sendArray,
      };

    default:
      return state;
  }
};
