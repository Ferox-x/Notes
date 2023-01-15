import React from 'react'
import './edit_profile.css'
import ProfileTop from '../profile_top/profile_top'



function EditProfile() {
    return (
        <div>
            <div className={'profile-top'}>
                <ProfileTop/>
            </div>
            <div>
                <div className="profile-bottom__center">
                    <form className="profile__edit">
                        {/*<EditInputs placeholder={'Имя'}*/}
                        {/*    type={'text'}/>*/}
                        {/*<EditInputs placeholder={'Номер телефона'}*/}
                        {/*    type={'tel'}/>*/}
                        {/*<EditInputs placeholder={'Почта'}*/}
                        {/*    type={'email'}/>*/}
                        {/*<EditInputs placeholder={'Пароль'}*/}
                        {/*    type={'password'}/>*/}
                    </form>
                    {/*<div className={'profile__edit-buttons'}>*/}

                    {/*    <BtnProfile button={{text: 'Редактировать'}}/>*/}
                    {/*    <BtnProfile button={{text: 'Отмена'}}/>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>

    )
}

export default EditProfile
