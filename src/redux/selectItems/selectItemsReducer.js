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
      let payload = action.payload.selectItems;
      console.log('payload', payload)
      console.log('stateselectall',state)
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
      let a = action.payload;
      console.log('payload',a)
  


      let selectItems = []
      let x = selectItems.push(aa);
      console.log('aaa',aa)
      console.log('selectItems',selectItems)
      console.log('xxx',x)
      console.log('stateselect',state)
      return {
        ...state,selectItems,selectItems:selectItems,
        // ...state, selectItems: [action.payload],
        // ...state.selectItems,action.payload
      };
      

    default:
      return state;
  }
};
