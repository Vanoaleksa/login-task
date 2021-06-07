import React, { Component, useState } from "react";
import "../css/Table.css";

const TableItem = (props) => {
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
      <div className="rowItem">{props.country}</div>
      <div className="rowItem">{props.age}</div>
      <div className="rowItem">{props.sex}</div>
    </div>
  );
};

export default TableItem;
