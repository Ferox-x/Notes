import React from 'react';
import CheckboxInput from "../../../UX/checkboxInput";

import '../styles/subTaskList.css'



function SubTasksList({subtasks}) {
  return (
    <div className={'checkbox-inputs-container'}>
      {subtasks.map((subtask, index) =>
          <CheckboxInput
            style={{
              marginBottom: '30px'
            }}
            key={subtask.id}
            index={index}
          />
        )}
    </div>
  );
}

export default SubTasksList;
