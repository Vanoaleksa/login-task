import React, { Component, useState, useEffect } from "react";
import "../css/Table.css";

const DropDown = (props) => {
  console.log("dropdownprops", props.selected);

  return (
    <div>
      <div className="dropDown">
        <div className="headerDrop">
          <span>Selected:</span>
        </div>
        <div className="contentDrop">
          {props.selected && props.selected.selectItems.length > 0
            ? props.selected.selectItems.map((item) => (
                <div>
                  {" "}
                  {item.country}, {item.age}, {item.sex}{" "}
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
