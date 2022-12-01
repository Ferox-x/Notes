import React from "react";
import './profile_settings.css'
import ProfileTop from "../profile_top/profile_top";
import ProfileBlock from "../profile_block/profile_block";
import {NavLink} from "react-router-dom";

function ProfileSettings() {
  return (
    <div>
      <div className={"profile-top"}>
        <ProfileTop/>
      </div>
      <div className={"profile-button"}>
        <NavLink to='/profile'>
          <ProfileBlock block={{text: 'Настройки'}}/>
        </NavLink>
        <NavLink to='/settings'>
          <ProfileBlock block={{text: 'Тема'}}/>
        </NavLink>
        <NavLink to='/settings'>
          <ProfileBlock block={{text: 'О нас'}}/>
        </NavLink>
        <NavLink to='/settings'>
          <ProfileBlock block={{text: 'Выйти'}}/>
        </NavLink>
      </div>

    </div>

  )
}

export default ProfileSettings;
