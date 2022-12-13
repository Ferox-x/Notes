import React from "react";
import './btn_profile.css'

function BtnProfile({children, ...props}) {
  return (
      <button {...props} className="profile__edit-btn">{children}</button>
  )
}

export default BtnProfile;
