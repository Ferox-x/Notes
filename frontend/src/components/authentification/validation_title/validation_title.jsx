import React from 'react'
import './validation_title.css'

function ValidationTitle({style={}, title, ...props}) {
    return(
        <div className="page-title-login">
            <p style={style} className="page-title-login__text">{title.val_title}</p>
        </div>
    )
}

export default ValidationTitle
