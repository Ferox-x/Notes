import React from 'react'
import styles from './styles/input.module.css'

function Input({value, setValue, ...props}) {
  return (
      <input
        className={styles.input}
        value={value}
        onChange={(e) => {setValue(e.target.value)}}
        {...props}
      />
  )
}

export default Input
