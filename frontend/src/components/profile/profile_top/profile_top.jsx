import React from "react";
import './profile_top.css'
import profile_img from '../../../img/profile/profile-image.svg'
import {NavLink} from "react-router-dom";
import urls from "../../../urls";


function ProfileTop(props) {
  return (
    <div className={'profile-top'}>
      <div className="profile__data">
        <div className="profile__image">
          <img src={profile_img}/>
        </div>
        <div className="profile__info">
          <div className="profile__name">Наталия</div>
          <div className="profile__email">natalyadrongal@mail.ru</div>
          <NavLink to={urls.EDIT} className="profile__button-edit">Редактировать
            профиль</NavLink>
        </div>
      </div>
    </div>

  )
}

export default ProfileTop;
