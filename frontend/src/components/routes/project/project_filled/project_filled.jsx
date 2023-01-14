import React from 'react';
import './project_filled.css'
import TypeNoteIcon from "../../../UX/type_note_icon";
import ExecutorIcon from "../../../UX/executor_icon";
import ProgressIcon from "../../../UX/progress_icon";
import AuthorIcon from "../../../UX/author_icon";

function ProjectFilled(props) {
  return (
    <div className="project-block">
      <div className="project-block__top">
        <div className="project-block__title">Дизайн-макет приложения</div>
        <TypeNoteIcon/>
      </div>
      <div className="project-block__middle">
        <div className="project-block__middle-executor">
          <ExecutorIcon/>
          <div className="project-block__middle-executor-name project-block__middle-executor-title">Исполнитель:</div>
          <div className="project-block__middle-executor-name">Ксения Сурикова</div>
        </div>
        <div className="project-block__middle-progress">
          <div className="project-block__middle-progress-text">В прогрессе</div>
          <ProgressIcon/>
        </div>
      </div>
      <div className="project-block__bottom">
        <div className="project-block__bottom-info">Вчера</div>
        <div className="project-block__bottom-info project-block__bottom-date">31/12/2022</div>
        <div className="project-block__bottom-author">
          <AuthorIcon />
          <div className="project-block__bottom-info" style={{marginRight: '2px', marginLeft: '6px'}}>Автор:</div>
          <div className="project-block__bottom-info">Юлия Конохова</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectFilled;
