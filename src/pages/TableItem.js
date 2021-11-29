import React, {  useState, useRef } from "react";
import "../css/Table.css";
import { selectItemsActions } from "../redux/selectItems/selectItemsActions";
import { useDispatch} from "react-redux";



const TableItem = (props) => {
  const toDoItemField = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  
  const editItem = () => {
    setIsOpen(!isOpen);
  };

  const saveItem = () => {
    setIsOpen(!isOpen);
    const actionData = props.data.map((el) => {
      if (props.id === el.id) {
        return {
          id:props.id,
          toDoItem: toDoItemField.current.value,
        };
      } else {
        return el;
      }
    })
    dispatch(selectItemsActions.updateItem(actionData))
    props.setData(actionData)
  };

  const cancelItem = () => {
    setIsOpen(!isOpen);
    props.setData((lastArray) => [
      ...lastArray.map((data) => {
        return data;
      }),
    ]);
  };

  const selectCheckbox = () => {
    props.setData((lastArray) => [
      ...lastArray.map((data) => {
        if (props.id === data.id) {
          return data.isChecked === true
            ? { ...data, isChecked: false }
            : { ...data, isChecked: true };
        } else {
          return { ...data };
        }
      }),
    ]);
    dispatch(selectItemsActions.selectCheckbox(props));
  };
  

  return (
    <div className="row">
      <label>
        <div className="checkbox">
          <input
            type="checkbox"
            id={props.id}
            checked={props.isChecked}
            onChange={() => {
              props.setChecked(props.id);
              selectCheckbox();
            }}
          ></input>
        </div>
      </label>
      <div className="rowItem">
        {isOpen ? (
          <input
            className="inputEdite"
            defaultValue={props.toDoItem}
            ref={toDoItemField}
          ></input>
        ) : (
          props.toDoItem
        )}
      </div>
      <div className="editeButton">
        {isOpen ? (
          <button className="btnSave" onClick={saveItem}>
            <ion-icon name="checkmark-outline"></ion-icon>
          </button>
        ) : (
          <button className="btnEdite" onClick={editItem}>
            {" "}
            <ion-icon name="create-outline"></ion-icon>
          </button>
        )}
        {isOpen ? (
          <button className="btnCancel" onClick={cancelItem}>
            {" "}
            <i class="fa fa-close"></i>
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default TableItem;
