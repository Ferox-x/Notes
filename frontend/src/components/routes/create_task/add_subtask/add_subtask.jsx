import React from 'react';
import './add_subtask.css'

function AddSubtask({setValue, ...props}) {
  return (
    <div className={'subtask-text'}>
      Добавить подзадачу
    </div>
  );
}

export default AddSubtask;
