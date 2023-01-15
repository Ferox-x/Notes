import React from 'react'
import './profile_top.css'
import {useSelector} from 'react-redux'
import profile_img from '../../../../img/profile/profile-image.svg'
import {NavLink} from 'react-router-dom'
import urls from '../../../../urls'


function ProfileTop(props) {
  const userData = useSelector(state => state.user.currentUser)

  return (
    <div className={'profile-top'}>
      <div className="profile__data">
        <div className="profile__image">
          <img src={profile_img}/>
        </div>
        <div className="profile__info">
          <div className="profile__name">{userData.name}</div>
          <div className="profile__email">{userData.email}</div>
          <NavLink to={urls.EDIT} className="profile__button-edit">Редактировать
            профиль</NavLink>
        </div>
      </div>
    </div>

  )
}

export default ProfileTop
