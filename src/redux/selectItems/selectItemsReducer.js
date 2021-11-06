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
  let b = state.selectItems;
  console.log("seleccountry", state.selectItems[1]);
  console.log("b", b);
  function getUniqTags(selectItems) {
    var results = [];

    selectItems.forEach(function (value) {
      value = value.trim();

      if (results.indexOf(value) === -1) {
        results.push(value);
      }
    });
    console.log("results", results);
    return results;
  }
  switch (action.type) {
    case SELECT_ITEMS:
      let payload = action.payload.selectItems;
      console.log("payload", payload);
      console.log("stateselectall", state.value);
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
      let aa = action.payload.selectItems;
      let a = action.payload;
      console.log("payload", a);


      let selectItems = state.selectItems;
      console.log("selectItems1", selectItems);

      let x = selectItems.push(aa);
      
      

      console.log("selectItems2", selectItems);
      console.log("stateselect", state);
      console.log("aa", aa);

      return {
        ...state,
        selectItems,
        selectItems: selectItems,
      };

    default:
      return state;
  }
};
