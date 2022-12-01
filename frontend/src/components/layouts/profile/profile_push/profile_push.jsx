import React from "react";
import './profile_push.css'
import ProfileTop from "../profile_top/profile_top";
import ProfileBlock from "../profile_block/profile_block";
import {NavLink} from "react-router-dom";

function ProfilePush() {
  return (
    <div>
      <div className={"profile-top"}>
        <ProfileTop/>
      </div>
      <div className={"profile-bottom"}>
        <div className={"profile-bottom__button"}>
          <div className={"profile-button"}>
            <NavLink to='/profile'>
              <ProfileBlock block={{text: 'Push-уведомления'}}/>
            </NavLink>
            <NavLink to='/profile'>
              <ProfileBlock block={{text: 'Отключить'}}/>
            </NavLink>
          </div>
        </div>
        <div className="profile__text">
          Подключите уведомления, чтобы быть в курсе о предстоящих задачах!
        </div>
      </div>


    </div>

  )
}

export default ProfilePush;
