import React from 'react'
import styles from './styles/input.module.css'

function Input({type = 'text', placeholder, name, value = '', setValue, ...props}) {
  return (
      <input className={styles.input}
             type={type}
             placeholder={placeholder}
             name={name}
             value={value}
             onChange={(event) => setValue(event.target.value)}
             {...props}
      />
  )
}

export default Input
