import { CLEAR_ITEMS, SELECTCHECKBOX, SELECT_ITEMS } from "./selectItemsConstans";

const initialState = {
  selectItems: [],
};

export const selectItemsReducer = (state = initialState, action) => {
  console.log("initialstateREDUCER", state);
  let b = state.selectItems;


  console.log('b', b)
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
        selectItems: [],
      };
    case SELECTCHECKBOX:
      let aa= action.payload.selectItems;
      console.log('aaa',aa)
      return {
        ...state, selectItems: [...state.selectItems,action.payload.selectItems],
      };

    default:
      return state;
  }
};
