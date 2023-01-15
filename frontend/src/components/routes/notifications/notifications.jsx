import React from 'react'
import Title from '../../UX/title'
import BlockContent from '../../attribute/blockContent/BlockContent'


function Notifications() {
    return(
        <div>
            <Title title={'Уведомления'}/>
            <BlockContent block={{
                area_text: 'Создайте первый проект и получайте уведомления!'
            }}/>
        </div>
    )
}

export default Notifications
