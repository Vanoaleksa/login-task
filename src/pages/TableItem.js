import React, { Component } from "react";


const TableItem = (props) => {
  return (
    <div >
        <div className='Country'>
        {props.country}
        </div>
        <div className='Age'>
        {props.age}
        </div>
        <div className='Sex'>
        {props.sex}
        </div>
    </div>
  );
};

export default TableItem;
