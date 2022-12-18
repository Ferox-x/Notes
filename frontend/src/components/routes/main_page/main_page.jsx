import './main_page.css'
import BlockContent from '../../attribute/blockContent/BlockContent'
import Title from '../../UX/title'


function MainPage() {

  return (
    <div>
      <Title
        title={'Главная'}
      />
      <BlockContent block={{
        title: 'Недавние задачи', area_text: 'Здесь появятся ваши недавние\n' +
          '          задачи'
      }}/>
      <BlockContent block={{
        title: 'Ближайшие дедлайны',
        area_text: 'Создайте первую задачу и добавьте дедлайн!'
      }}/>
    </div>

  )
}

export default MainPage
