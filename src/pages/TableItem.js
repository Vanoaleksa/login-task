import React, { Component, useState, useRef } from "react";
import "../css/Table.css";

const TableItem = (props) => {
  const countryField = useRef(null);
  console.log(countryField)
  const sexField = useRef(null);
  console.log(sexField)
  const ageField = useRef(null);
  
  const [isStatus, setIsStatus] = useState(false);
  const editeItem = () => {
    setIsStatus(!isStatus);
  };
  const saveItem = () => {
    console.log('he')
    setIsStatus(!isStatus);
    console.log('sadasdasde')
    props.setData((lastArray) => [
      ...lastArray.map((data) => {
        if (props.id === data.id) {
          return {
            id:props.id, country: countryField.current.value, age: ageField.current.value, sex: sexField.current.value
          }
        }
        else {
          return data
        }
      })])
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
        {isStatus ? (
          <input  defaultValue={props.country} ref={countryField}></input>
        ) : (
          props.country
        )}
      </div>
      <div className="rowItem">
        {isStatus ? (
          <input  defaultValue={props.age} ref={ageField}></input>
        ) : (
          props.age
        )}
      </div>
      <div className="rowItem">
        {isStatus ? (
          <input  defaultValue={props.sex} ref={sexField}></input>
        ) : (
          props.sex
        )}
      </div>
      <div className="editeButton">
        {isStatus ? (
          <button onClick={saveItem}>Save</button>
        ) : (
          <button id={props.id} onClick={editeItem}>
            {" "}
            Edite
          </button>
        )}
      </div>
    </div>
  );
};

export default TableItem;
