import React from 'react'
import './main_page_full.css'
import Title from '../attribute/title/Title'
import BlockContentFilled from '../attribute/block_content_filled/block_content_filled'
import BlockContent from '../attribute/blockContent/BlockContent'
import Subtitle from '../attribute/subtitle/subtitle'

function MainPageFull() {
    return (
        <div>
            <Title title={{title: 'Задачи'}}/>
            <Subtitle subtitle={{text: 'Недавние задачи'}}/>
            <BlockContentFilled info={{title: 'Дизайн-макет прилож...', status: 'В\n' +
          '            прогрессе', date: 'Вчера', date_num: '31/12/2022'}}/>
            <BlockContentFilled info={{title: 'Название группы', status: 'В\n' +
          '            прогрессе', date: 'Вчера', date_num: '31/12/2022'}}/>
            <BlockContentFilled info={{title: 'Тестирование 1 ПР', status: 'В\n' +
          '            прогрессе', date: 'Вчера', date_num: '31/12/2022'}}/>
        </div>

    )
}

export default MainPageFull
