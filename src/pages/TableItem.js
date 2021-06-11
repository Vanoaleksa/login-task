import React, { Component, useState, useRef } from "react";
import "../css/Table.css";

const TableItem = (props) => {
  const countryField = useRef(null);
  const sexField = useRef(null);
  const ageField = useRef(null);

  const [isStatus, setIsStatus] = useState(false);
  const editeItem = () => {
    setIsStatus(!isStatus);
  };
  const saveItem = () => {
    setIsStatus(!isStatus);
    props.setData((lastArray) => [
      ...lastArray.map((data) => {
        if (props.id === data.id) {
          return {
            id: props.id,
            country: countryField.current.value,
            age: ageField.current.value,
            sex: sexField.current.value,
          };
        } else {
          return data;
        }
      }),
    ]);
  };

  const cancelItem = () => {
    setIsStatus(!isStatus);
    props.setData((lastArray) => [
      ...lastArray.map((data) => {
        return data;
      }),
    ]);}
    

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
          <input defaultValue={props.country} ref={countryField}></input>
        ) : (
        props.country
        )}
      </div>
      <div className="rowItem">
        {isStatus ? (
          <input defaultValue={props.age} ref={ageField}></input>
        ) : (
          props.age
        )}
      </div>
      <div className="rowItem">
        {isStatus ? (
          <input defaultValue={props.sex} ref={sexField}></input>
        ) : (
          props.sex
        )}
      </div>
      <div className="editeButton">
        {isStatus ? (
          <button className="buttonSave" onClick={saveItem}>
            {" "}
            Save{" "}
          </button>
        ) : (
          <button className="buttonEdite" onClick={editeItem}>
            {" "}
            Edite
          </button>
        )}
        {isStatus ? <button onClick={cancelItem}>Cancel</button> : null}
      </div>
    </div>
  );
};

export default TableItem;
