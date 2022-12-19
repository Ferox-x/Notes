import React, {useState} from 'react'
import Input from './input'
import styles from './styles/checkboxInput.module.css'

function CheckboxInput({key, subtask, ...props}) {

  const [subTask, setSubTask] = useState(subtask)

  return (
    <label
      className={styles.customCheckbox}
      style={{
        marginBottom: '30px'
      }}
    >
      <input
        type={'checkbox'}
      />
      <p>
        <Input
          style={{
            marginBottom: '20px'
          }}
          type={'text'}
          placeholder={'Тема задачи'}
          value={subTask}
          onChange={e => setSubTask(e.target.value)}
        />
      </p>
    </label>
  )
}

export default CheckboxInput
