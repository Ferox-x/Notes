import React from 'react';
import './add_subtask.css'

function AddSubtask({onclick, ...props}) {
  return (
    <div className={'subtask-text'} onClick={onclick} >
      Добавить подзадачу
    </div>
  );
}

export default AddSubtask;
