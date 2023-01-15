import React from 'react';
import CheckboxInput from "../../../UX/checkboxInput";

import '../styles/subTaskList.css'



function SubTasksList({subtasks, setValue, ...props}) {
  return (
    <div className={'checkbox-inputs-container'}>
      {subtasks.map((subtask, index) =>
          <CheckboxInput
            style={{
              marginBottom: '30px'
            }}
            subtasks={subtasks}
            setValue={setValue}
            key_id={subtask.id}
            value={subtask.value}
            key={subtask.id}
            index={index}
          />
        )}
    </div>
  );
}

export default SubTasksList;
