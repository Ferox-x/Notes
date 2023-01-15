import React, {useState} from 'react'
import Input from './input'
import styles from './styles/checkboxSpan.module.css'


function CheckboxSpan({subtask, index, ...props}) {


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
        {subtask}
      </p>
    </label>
  )
}

export default CheckboxSpan
