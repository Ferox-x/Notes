import React from 'react'
import './profile_settings.css'
import ProfileTop from '../profile_top/profile_top'
import ProfileBlock from '../profile_block/profile_block'
import {NavLink} from 'react-router-dom'
import urls from '../../../../urls'


function ProfileSettings() {
    return (
        <div>
            <div className={'profile-top'}>
                <ProfileTop/>
            </div>
            <div className={'profile-button'}>
                <NavLink to={urls.PROFILE}>
                    <ProfileBlock block={{text: 'Настройки'}}/>
                </NavLink>
                <NavLink to={urls.SETTINGS}>
                    <ProfileBlock block={{text: 'Тема'}}/>
                </NavLink>
                <NavLink to={urls.SETTINGS}>
                    <ProfileBlock block={{text: 'О нас'}}/>
                </NavLink>
                <NavLink to={urls.SETTINGS}>
                    <ProfileBlock block={{text: 'Выйти'}}/>
                </NavLink>
            </div>

        </div>

    )
}

export default ProfileSettings
