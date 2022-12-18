import React from 'react'
import styles from './styles/title.module.css'

function Title({title, ...props}) {
  return (
    <div className={styles.title}>
      <p className={styles.title__text} {...props}>{title}</p>
    </div>

  )
}

export default Title
