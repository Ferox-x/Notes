import React from 'react';
import CheckboxInput from "../../../UX/checkboxInput";


function SubTasksList({subtasks}) {
  return (
    <div>
      {subtasks.map((subtask) =>
          <CheckboxInput
            style={{
              marginBottom: '30px'
            }}
            title={subtask.subTitle}
            key={subtask.id}
          />
        )}
    </div>
  );
}

export default SubTasksList;
