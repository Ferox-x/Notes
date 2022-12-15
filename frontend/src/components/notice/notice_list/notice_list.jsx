import React from 'react'
import Notice from '../alert/notice'
import './notice_list.css'


function NoticeList(props) {

    return (
        <div className={'notice_container'}>
            {props.notifications.map(notice =>
                <Notice key={notice.id} id={notice.id} message={notice.message} deleteNotice={notice.deleteNotice}/>
            )}
        </div>
    )
}

export default NoticeList
