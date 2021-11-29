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
  
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
      };

    case ADD_ITEM:
      let newArray = state.selectItems;
      if (newArray.length > 0) {
        let lastIndex = newArray[newArray.length - 1].id;
        newArray = [
          ...newArray,
          { id: lastIndex + 1, toDoItem: "", isChecked: false },
        ];
        return {
          ...state,
          selectItems: newArray,
        };
      } else {
        newArray = [...newArray, { id: 0, toDoItem: "", isChecked: false }];
        return {
          ...state,
          selectItems: newArray,
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
      let actionData = action.payload.selectItems;
      return {
        ...state,
        selectItems: actionData,
      };

    default:
      return state;
  }
};
