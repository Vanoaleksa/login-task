import React, { Component, useState, useEffect } from "react";
import "../css/Table.css";
import TableItem from "./TableItem";
import axios from "axios";
import DropDown from "./DropDown";
import { useDispatch, useSelector } from "react-redux";
import { selectItemsActions } from "../redux/selectItems/selectItemsActions";
import { selectedSelector } from "../redux/selectItems/selectItemsSelectors";

const Table1 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = "http://localhost:5000/dataArray";
    axios.get(apiUrl).then((resp) => {
      console.log(resp);
      let dataArray = resp.data;
      setData(dataArray);
    });
  }, []);

  const dispatch = useDispatch();
  const addNewItem = () => {
    axios.post("http://localhost:5000/add").then((res) => {
      setData(res.data);
    });
  };

  const onDeleteClick = () => {
    console.log(checked);
    axios.delete(`http://localhost:5000/delete/${checked}`).then((res) => {
      console.log("res", res.data);
      setData(res.data);
    });
  };

  const selectAllItems = () => {
    console.log("data", data);
    dispatch(selectItemsActions.select(data));
    let checkedArray = data.map((el) => {
      return { ...el, isChecked: true };
    });
    console.log("checkedarray", checkedArray);
    setData(checkedArray);
  };

  const clearItems = () => {
    dispatch(selectItemsActions.clear(data));
    let checkedArray = data.map((el) => {
      return { ...el, isChecked: false };
    });
    setData(checkedArray);
  };

  const selected = useSelector(selectedSelector);
  console.log("selected", selected);

  const [checked, setChecked] = useState(null);
  console.log("checked", checked);

  return (
    <div>
      <div className="content">
        <div className="firstContent">
          <div className="Header">
            <span className="columnelem">Name</span>
            <span className="columnelem">Age</span>
            <span className="columnelem">Sex</span>
          </div>

          <div className="Table_container">
            <div className="Table_element">
              {data.map((el) => (
                <TableItem
                  id={el.id}
                  setChecked={setChecked}
                  checked={checked}
                  country={el.country}
                  age={el.age}
                  sex={el.sex}
                  setData={setData}
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
          </div>
        </div>
        <div className="secondContent">
          <DropDown selected={selected} />
        </div>
      </div>
    </div>
  );
};

export default Table1;
