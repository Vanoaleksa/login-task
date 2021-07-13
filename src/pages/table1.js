import React, { Component, useState, useEffect } from "react";
import "../css/Table.css";
import TableItem from "./TableItem";
import axios from "axios";

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

  console.log(data);

  const addNewItem = () => {
    let lastIndex = data[data.length - 1].id;
    console.log(lastIndex);

    setData((oldArray) => [
      ...oldArray,
      { id: lastIndex + 1, country: "", age: "", sex: "" },
    ]);
  };

  const onDeleteClick = () => {
    setData((oldArray) => [
      ...oldArray.filter((data) => {
        console.log(data.id);
        console.log(checked);
        return data.id !== checked;
      }),
    ]);
  };

  const [checked, setChecked] = useState(null);

  return (
    <div>
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
      </div>
    </div>
  );
};

export default Table1;
