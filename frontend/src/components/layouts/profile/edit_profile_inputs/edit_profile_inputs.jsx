import React from "react";
import './edit_profile_inputs.css'

function EditInputs(props) {
  return(
    <div>
      <input className="profile__data-user" type={props.type} id={props.id}
           placeholder={props.placeholder}/>
    </div>
  )
}

export default EditInputs;
