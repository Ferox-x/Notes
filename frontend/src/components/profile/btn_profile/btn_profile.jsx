import React from "react";
import './btn_profile.css'

function BtnProfile(props) {
  return (
      <div className="profile__edit-btn">{props.button.text}</div>
  )
}

export default BtnProfile;
