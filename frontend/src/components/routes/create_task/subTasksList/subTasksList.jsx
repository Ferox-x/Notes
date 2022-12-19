import React from 'react';
import CheckboxInput from "../../../UX/checkboxInput";


function SubTasksList({subtasks}) {
  return (
    <div>
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
