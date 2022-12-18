import React from 'react'
import './project.css'
import Title from '../../UX/title'
import BlockContent from '../../attribute/blockContent/BlockContent'

function Project() {
    return (
        <div>
            <Title title={'Проекты'}/>
            <BlockContent block={{
                area_text: 'Здесь появятся ваши проекты'
            }}/>
        </div>
    )
}

export default Project
