import React, { Component } from "react";
// import '../css/TableItem.css'
import "../css/Table.css";

const TableItem = (props) => {
  return (
    <div className="row">
      <div className="checkbox"><input type='checkbox'></input>
</div>
      <div className="rowItem">{props.country}</div>
      <div className="rowItem">{props.age}</div>
      <div className="rowItem">{props.sex}</div>
    </div>
  );
};

export default TableItem;
