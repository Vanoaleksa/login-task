import React, { Component, useState, useEffect } from "react";
import "../css/Table.css";

const DropDown = ({selected}) => {
  console.log('sell',selected)
  console.log('selsel',selected.selectItems)

  
  
  return (
    <div>
      <div className="dropDown">
        <div className="headerDrop">
          <span>Selected:</span>
        </div>
        <div className="contentDrop">
          {selected && selected.selectItems 
            ? selected.selectItems.map((item) => (
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
