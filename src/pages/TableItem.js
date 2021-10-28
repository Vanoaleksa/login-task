import React, { Component, useState, useRef } from "react";
import "../css/Table.css";
import { selectItemsActions } from "../redux/selectItems/selectItemsActions";
import { useDispatch,  } from "react-redux";


const TableItem = (props) => {
  console.log('props',props.el)
  const countryField = useRef(null);
  const sexField = useRef(null);
  const ageField = useRef(null);

  const [isStatus, setIsStatus] = useState(false);

  const dispatch = useDispatch();
  
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
    ]);
  };

  const selectCheckbox = () => {
    console.log('propsss', props.el.isChecked)
    
    // let checkedArray = props.el.map((el) => {
    //   return { ...el, isChecked: true };
    // });
    //  setData(checkedArray)
    // let sendArray = props.map(el => { return el.id === props.el.checked ? (el) : null}  )
    // console.log('sendarray', sendArray)
    props.setData((lastArray) => [
      ...lastArray.map((data) => {
        if (props.id === data.id ) {
          return {
            id: props.id,
            country: props.country,
            age: props.age,
            sex: props.sex,
            isChecked:true,
          };
        } else {
          return { ...data,isChecked:false};
        }
      }),
    ]);
    
    dispatch(selectItemsActions.selectcheckbox(props.el));

  }

  return (
    <div className="row">
      <label>
        <div className="checkbox">
          <input
            type="checkbox"
            id={props.id}
            checked={props.isChecked} 
            onChange={() => { props.setChecked(true); selectCheckbox();  }}
          ></input>
        </div>
      </label>
      <div className="rowItem">
        {isStatus ? (
          <input  className='inputEdite' defaultValue={props.country} ref={countryField}></input>
        ) : (
          props.country
        )}
      </div>
      <div className="rowItem">
        {isStatus ? (
          <input className='inputEdite' defaultValue={props.age} ref={ageField}></input>
        ) : (
          props.age
        )}
      </div>
      <div className="rowItem">
        {isStatus ? (
          <input className='inputEdite'  defaultValue={props.sex} ref={sexField}></input>
        ) : (
          props.sex
        )}
      </div>
      <div className="editeButton">
        {isStatus ? (
          <button className="btnSave" onClick={saveItem}>
            <ion-icon name="checkmark-outline"></ion-icon>
          </button>
        ) : (
          <button className="btnEdite" onClick={editeItem}>
            {" "}
            <ion-icon name="create-outline"></ion-icon>
          </button>
        )}
        {isStatus ? (
          <button className="btnCancel" onClick={cancelItem}>
            {" "}
            <i class="fa fa-close"></i>
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default TableItem;
