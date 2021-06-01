import React, { Component, useState } from "react";
import "../css/Table.css";
import TableItem from "./TableItem";

let dataArray = [
  { country: "Belarus", age: "21", sex: "men" },
  { country: "Portugal", age: "44", sex: "men" },
  { country: "China", age: "33", sex: "men" },
];

const Table1 = () => {
  const [data, setData] = useState(dataArray);
  console.log(data);

  const addNewItem = () => {
    setData((oldArray) => [...oldArray, { country: "", age: "", sex: "" }]);
  };

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
            <TableItem country={el.country} age={el.age} sex={el.sex} />
          ))}
        </div>
      </div>
      <div className="Buttons">
        <div className="NewButton">
          <button onClick={addNewItem}>New</button>
        </div>
        <div className="DeleteButton">
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Table1;
