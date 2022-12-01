import React from "react";
import './user_profile.css'
import ProfileBlock from "../profile_block/profile_block";
import ProfileTop from "../profile_top/profile_top";
import {NavLink} from "react-router-dom";

function User_profile(props) {
  return (
    <div>
      <div className={"profile-top"}>
        <ProfileTop/>
      </div>
      <div className="profile-button">
        <NavLink to='/settings'>
          <ProfileBlock block={{text: 'Настройки'}}/>
        </NavLink>
        <NavLink to='/profilepush'>
          <ProfileBlock block={{text: 'Push-уведомления'}}/>
        </NavLink>
        <NavLink to='/settings'>
          <ProfileBlock block={{text: 'Поделиться приложением'}}/>
        </NavLink>
        <NavLink to='/settings'>
          <ProfileBlock block={{text: 'Оставьте отзыв!'}}/>
        </NavLink>
      </div>
    </div>


  )
}

export default User_profile;
