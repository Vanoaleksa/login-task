import React, {  useState, useRef } from "react";
import "../css/Table.css";
import { selectItemsActions } from "../redux/selectItems/selectItemsActions";
import { useDispatch} from "react-redux";



const TableItem = (props) => {
  const toDoItemField = useRef(null);
  const [isStatus, setIsStatus] = useState(false);
  const dispatch = useDispatch();
  
  const editeItem = () => {
    setIsStatus(!isStatus);
  };

  const saveItem = () => {
    setIsStatus(!isStatus);
    const actiondata = props.data.map((el) => {
      if (props.id === el.id) {
        return {
          id:props.id,
          toDoItem: toDoItemField.current.value,
        };
      } else {
        return el;
      }
    })
    dispatch(selectItemsActions.updateitem(actiondata))
    props.setData(actiondata)
  };

  const cancelItem = () => {
    setIsStatus(!isStatus);
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
    dispatch(selectItemsActions.selectcheckbox(props));
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
        {isStatus ? (
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
        {isStatus ? (
          <button className="btnSave" onClick={saveItem}>
            <ion-icon name="checkmark-outline"></ion-icon>
          </button>
        ) : (
          <button className="btnEdite" onClick={editeItem}>
            {" "}
            <ion-icon name="create-outline"></ion-icon>
          </button>
        )}
        {isStatus ? (
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
