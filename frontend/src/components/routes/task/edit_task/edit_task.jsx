import React from 'react';
import './edit_task.css'
import Title from "../../../UX/title";
import Back from "../../../UX/back";

function EditTask(props) {
  return (
    <div>
      <div className="edit-task-top">
        <Title title={'Личная задача'}/>
        <Back/>
      </div>

    </div>
  );
}

export default EditTask;
