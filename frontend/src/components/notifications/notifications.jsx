import React from 'react'
import Title from '../attribute/title/Title'
import BlockContent from '../attribute/blockContent/BlockContent'


function Notifications() {
    return(
        <div>
            <Title title={{title: 'Уведомления'}}/>
            <BlockContent block={{
                area_text: 'Создайте первый проект и получайте уведомления!'
            }}/>
        </div>
    )
}

export default Notifications
