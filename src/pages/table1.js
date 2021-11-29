import React, { useState, useEffect } from "react";
import "../css/Table.css";
import TableItem from "./TableItem";

import { useDispatch, useSelector } from "react-redux";
import { selectItemsActions } from "../redux/selectItems/selectItemsActions";
import { selectedSelector } from "../redux/selectItems/selectItemsSelectors";

const Table1 = () => {
  const [data, setData] = useState([]);
  const [checked, setChecked] = useState(null);
  const dispatch = useDispatch();
  const dataArray = useSelector(selectedSelector);

  useEffect(() => {
    dispatch(selectItemsActions.getitems(data));
    setData(dataArray.selectItems.selectItems);
    console.log("dataarray", dataArray);
  }, []);

  const addNewItem = () => {
    console.log("adddata", data);
    dispatch(selectItemsActions.additem(data));
    setData(dataArray.selectItems.selectItems);
  };

  const onDeleteClick = () => {
    let checkedArray = data.filter((el) => (el.isChecked !== true ));
    dispatch(selectItemsActions.deleteitem(checkedArray))
    setData(checkedArray)
  };

  const selectAllItems = () => {
    console.log("data", data);
    dispatch(selectItemsActions.select(data));

    let checkedArray = data.map((el) => {
      return { ...el, isChecked: true };
    });
    setData(checkedArray);
  };

  const clearItems = () => {
    dispatch(selectItemsActions.clear(data));
    let checkedArray = data.map((el) => {
      return { ...el, isChecked: false };
    });
    setData(checkedArray);
  };

  return (
    <div>
      <div className="content">
        <div className="firstContent">
          <div className="Header">To Do List:</div>

          <div className="Table_container">
            <div className="Table_element">
              {data.map((el) => (
                <TableItem
                  id={el.id}
                  setChecked={setChecked}
                  checked={checked}
                  toDoItem={el.toDoItem}
                  setData={setData}
                  data ={data}
                  isChecked={el.isChecked}
                  el={el}
                />
              ))}
            </div>
          </div>
          <div className="Buttons">
            <div className="NewButton">
              <button className="btnNew" onClick={addNewItem}>
                <ion-icon name="add-outline"></ion-icon>
              </button>
            </div>
            <div className="DeleteButton">
              <button className="btnDelete" onClick={onDeleteClick}>
                <ion-icon name="trash-outline"></ion-icon>
              </button>
            </div>
            <div className="SelectButton">
              <button className="btnSelect" onClick={selectAllItems}>
                <ion-icon name="checkbox-outline"></ion-icon>{" "}
              </button>
            </div>
            <div className="ClearButton">
              <button className="btnClear" onClick={clearItems}>
                <ion-icon name="square-outline"></ion-icon>
              </button>
            </div>
            {/* <DropDown /> */}
          </div>
        </div>
        <div className="secondContent"></div>
      </div>
    </div>
  );
};

export default Table1;
