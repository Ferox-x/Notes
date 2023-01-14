import React from 'react';
import './task_project.css'
import Back from "../../../UX/back";
import Delete from "../../../UX/delete_icon";
import Edit from "../../../UX/edit_icon";
import ExecutorIcon from "../../../UX/executor_icon";
import AuthorIcon from "../../../UX/author_icon";

function TaskProject(props) {
  return (
    <div className="project-task-block">
      <div className="project-task-block__top">
        <div className="project-task-block__top-title">Дизайн макет
          приложения
        </div>
        <Back/>
      </div>
      <div className="project-task-block__text">Делаем пока вариант сайта с
        разделами "о препарате" и с двумя видеовизитами. Лендинг и
        видеоинтервью добавим позже.
        В вертске так и будет - разделы и кнопки будем добавлять постепенно, а
        не сразу.
        Еще момент - пришлите, пожалуйста вот этот вариант сайта из трех
        разделов без повторов страниц, то есть им не надо показывать сейчас на
        каждой странице всякие действия типа выделения кнопок
        разделов.внимательно посмотрели, - надо немного изменить дизайн.
        во-первых, сделайте галки везде одинаковыми. Во-вторых, давайте
        попробуем сделать блоки вот как тут у них на сайте, типа на розовом
        фоне белые блоки и наоборот. и выравнивание у всех блоков должно быть
        одинаковым....
      </div>
      <div className="project-task-block__person">
        <ExecutorIcon/>
        <div className="project-task-block__person-name" style={{marginRight: '2px', marginLeft: '6px'}}>Исполнитель:</div>
        <div className="project-task-block__person-name">Ксения Сурикова
        </div>
      </div>
      <div className="project-task-block__person">
        <AuthorIcon/>
        <div className="project-task-block__person-name" style={{marginRight: '2px', marginLeft: '6px'}}>Автор:</div>
        <div className="project-task-block__person-name">Ксения Сурикова
        </div>
      </div>
      <div className="project-task-block__edit">
        <Edit/>
        <div className="project-task-block__edit-title">Редактировать задачу</div>
      </div>
      <div className="project-task-block__chat">
        <div className="project-task-block__chat-title">Чат</div>
        <div className="project-task-block__chat-message-block">Оставьте первое сообщение!</div>
        <textarea className="project-task-block__chat-textarea" placeholder={'Введите текст'}></textarea>
      </div>
      <div className="project-task-block__bottom">
        <div className="project-task-block__bottom-info">Вчера</div>
        <div className="project-task-block__bottom-info project-task-block__bottom-date">31/12/22</div>
        <div className="project-task-block__bottom-delete">
          <Delete/>
          <div className="project-task-block__bottom-delete-text">Удалить задачу</div>
        </div>
      </div>
    </div>
  );
}

export default TaskProject;
