import React from 'react'
import './profile_block.css'


function ProfileBlock(props) {
    return (
        <div className="profile-button">
            <div
                className="profile-button__settings profile-button__arrow">{props.block.text}
            </div>
        </div>

    )
}

export default ProfileBlock
