import React, {useState} from 'react'
import Input from './input'
import styles from './styles/checkboxInput.module.css'


function CheckboxInput({index, key_id, setValue, value,subtasks, ...props}) {

  function changeSubtitle(title) {
    setValue(subtasks.map((task) => {
        if (task.id === key_id) {
          return {
            id: task.id,
            subTitle: title
          }
        }
        else {
          return task
        }
      }
    ))
  }

  return (
    <div>
      <div className={styles.customCheckbox}></div>
      <Input
        style={{
          marginBottom: '20px'
        }}
        name={'subtask' + index}
        type={'text'}
        placeholder={'Подзадача'}
        value={value}
        setValue={changeSubtitle}
      />
    </div>
  )
}

export default CheckboxInput
