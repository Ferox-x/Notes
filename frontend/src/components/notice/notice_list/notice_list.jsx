import React, {useState} from 'react'
import Notice from '../alert/notice'

function NoticeList(props) {

    return (
        <div className={'notice_container'}>
            {props.notifications.map(notice =>
                <Notice key={notice.id} message={notice.message} deleteNotice={notice.deleteNotice}/>
            )}
        </div>
    )
}

export default NoticeList
