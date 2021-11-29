import {
  CLEAR_ITEMS,
  SELECTCHECKBOX,
  SELECT_ITEMS,
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM,
} from "./selectItemsConstans";

const initialState = {
  selectItems: [
    { id: 0, toDoItem: "Meeting 14:00", isChecked: false },
    { id: 1, toDoItem: "Date 19:30", isChecked: false },
    { id: 2, toDoItem: "Call mom", isChecked: false },
  ],
};

export const selectItemsReducer = (state = initialState, action) => {
  console.log("initialstateREDUCER", state);

  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
      };

    case ADD_ITEM:
      let newarray = state.selectItems;
      if (newarray.length > 0) {
        let lastIndex = newarray[newarray.length - 1].id;
        newarray = [
          ...newarray,
          { id: lastIndex + 1, toDoItem: "", isChecked: false },
        ];
        return {
          ...state,
          selectItems: newarray,
        };
      } else {
        newarray = [...newarray, { id: 0, toDoItem: "", isChecked: false }];
        return {
          ...state,
          selectItems: newarray,
        };
      }

    case DELETE_ITEM:
      let payloadDelete = action.payload.selectItems;
      return {
        state,
        selectItems: payloadDelete,
      };

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
      return {
        ...state,
        selectItems: selectItems,
      };

    case UPDATE_ITEM:
      let actiondata = action.payload.selectItems;
      console.log("actiond", actiondata);

      return {
        ...state,
        selectItems: actiondata,
      };

    default:
      return state;
  }
};
