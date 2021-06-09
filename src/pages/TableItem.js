import React, { Component, useState } from "react";
import "../css/Table.css";

const TableItem = (props) => {
  const [isStatus, setIsStatus] = useState(false);
  const editeItem = () => {
    setIsStatus(!isStatus);
  };

  return (
    <div className="row">
      <label>
        <div className="checkbox">
          <input
            type="checkbox"
            id={props.id}
            checked={props.checked === props.id}
            onChange={() => props.setChecked(props.id)}
          ></input>
        </div>
      </label>
      <div className="rowItem">
        {isStatus ? <input></input> : props.country}
      </div>
      <div className="rowItem">{isStatus ? <input></input> : props.age}</div>
      <div className="rowItem">{isStatus ? <input></input> : props.sex}</div>
      <div className="editeButton">
        <button id={props.id} onClick={editeItem}>
          Edite
        </button>
      </div>
    </div>
  );
};

export default TableItem;
