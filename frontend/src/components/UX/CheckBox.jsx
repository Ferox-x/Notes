import React from 'react';
import './styles/checkbox.css'

function CheckBox({title, id,...props}) {

  return (
    <div style={{marginBottom: '5px'}}>
      <input
        className="custom-checkbox"
        id={id}
        type="checkbox"/>
      <label htmlFor={id} className={"label"}>
        {title}
      </label>
    </div>
  );
}

export default CheckBox;
