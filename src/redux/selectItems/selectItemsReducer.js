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
      let x = selectItems.push(aa);
      let xx = selectItems;

      console.log("xx", xx);
      let xz = selectItems.map((el) => (el.isChecked === true  ? selectItems.push(aa) : null));  

      // const uniq = new Set (selectItems)
      // const backarr = [...uniq]
      // console.log('uniq',uniq)

      // getUniqTags(selectItems);

      //  getUnique = function (xx) {
      //   var i = 0,
      //   current,
      //   length = xx.length,
      //   unique = [];
      //   for (; i < length; i++) {
      //     current = xx[i];
      //     if (!~unique.indexOf(current)) {
      //       unique.push(current);
      //     }
      //   }
      //   return unique;
      // };

      // xx.reduce((unique, item) => {
      //   { console.log("item", item);}
      //   return unique.includes(item) ? unique : [...unique, item];
      // }, []);
      // console.log('unique',unique)

      //   function getIndex(aa, selectItems, prop) {
      //     for(var i = 0; i < selectItems.length; i++) {
      //         if(selectItems[i][prop] === aa) {
      //             return selectItems.push(aa);
      //         }
      //     }
      //     return null; //to handle the case where the value doesn't exist
      // }
      console.log("aa", aa);
      console.log("selectItems", selectItems);
      console.log("stateselect", state);
      return {
        ...state,
        selectItems,
        selectItems: selectItems,
      };

    default:
      return state;
  }
};
