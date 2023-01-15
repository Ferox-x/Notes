import React from 'react';
import './styles/checkbox.css'

function CheckBox(props) {
  return (
    <div style={{marginBottom: '5px'}}>
      <input
        className="custom-checkbox"
        id="myCheckbox"
        type="checkbox"/>
      <label htmlFor="myCheckbox" className={"label"}>
        Checkbox
      </label>
    </div>
  );
}

export default CheckBox;
