import React from 'react';
import './detail_task.css';

function DetailTask(props) {
  return (
    <div className={'detail-task-container'}>
      <div className={'detail-task-container__top'}>
        <div className={'detail-task-container__title'}>Дизайн-макет
          приложения
        </div>
        <div className={'detail-task-container__back'}></div>
      </div>
      <div className={'detail-task-container__middle'}>
        <div className={'detail-task-container__text'}>
          Делаем пока вариант сайта с разделами "о препарате" и с двумя
          видеовизитами. Лендинг и видеоинтервью добавим позже.
          В вертске так и будет - разделы и кнопки будем добавлять постепенно,
          а не сразу.
          Еще момент - пришлите, пожалуйста вот этот вариант сайта из трех
          разделов без повторов страниц, то есть им не надо показывать сейчас
          на каждой странице всякие действия типа выделения кнопок
          разделов.внимательно посмотрели, - надо немного изменить дизайн.
          во-первых, сделайте галки везде одинаковыми. Во-вторых, давайте
          попробуем сделать блоки вот как тут у них на сайте, типа на розовом
          фоне белые блоки и наоборот. и выравнивание у всех блоков должно быть
          одинаковым....
        </div>
      </div>
      <div className={'detail-task-container__bottom'}>
        <div className={'detail-task-container__edit'}>
          <div className={'detail-task-container__edit__text'}>Редактировать задачу</div>
        </div>
        <div className={'detail-task-container__info'}>
          <div className={'detail-task-container__info__dow'}>Вчера</div>
          <div className={'detail-task-container__info__dow detail-task-container__info__date'}>31/12/2022</div>
          <div className={'detail-task-container__info__dow detail-task-container__info__delete'}>Удалить задачу</div>
        </div>

      </div>


    </div>
  );
}

export default DetailTask;
