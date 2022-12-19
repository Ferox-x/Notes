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
            subtask={subtask}
            key={subtask.id}
          />
        )}
    </div>
  );
}

export default SubTasksList;
