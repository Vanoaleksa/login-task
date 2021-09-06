import { CLEAR_ITEMS, SELECTCHECKBOX, SELECT_ITEMS } from "./selectItemsConstans";

const initialState = {
  selectItems: null,
};

export const selectItemsReducer = (state = initialState, action) => {
  console.log("initialstateREDUCER", state);
  switch (action.type) {
    case SELECT_ITEMS:
      let payload = action.payload;
      return {
        ...state,
        selectItems: payload,
      };
    case CLEAR_ITEMS:
      return {
        // сравнение props.id и action.id 
        ...state,
        selectItems: null,
      };
    case SELECTCHECKBOX:
      // let newArray = action.payload.selectItems;
      // let selected = newArray;
      // let b = selected.map((el)=> {
      // {action.payload.props.id === el.id ? (el) : null};  
      // }) 
  
      // return {
      //   ...state,selectItems:selected
      // };

    default:
      return state;
  }
};
