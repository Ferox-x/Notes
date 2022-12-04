import React from "react";
import './formInputs.css';

function FormInputs(props) {
  return (
      <input className="user-form__input-text" placeholder={props.placeholder}
             type={props.type}
             value={props.value}
             onChange={(event) => props.setValue(event.target.value)}
      />
  )
}

export default FormInputs;
