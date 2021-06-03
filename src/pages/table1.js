import React, { Component, useState } from "react";
import "../css/Table.css";
import TableItem from "./TableItem";

let dataArray = [
  { id: 0, country: "Belarus", age: "21", sex: "men" },
  { id: 1, country: "Portugal", age: "44", sex: "men" },
  { id: 2, country: "China", age: "33", sex: "men" },
];

const Table1 = () => {
  const [data, setData] = useState(dataArray);
  console.log(data);

  const addNewItem = () => {
    let lastIndex = data[data.length - 1].id;
    console.log(lastIndex);

    setData((oldArray) => [
      ...oldArray,
      { id: lastIndex + 1, country: "", age: "", sex: "" },
    ]);
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
