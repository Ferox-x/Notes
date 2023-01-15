import React from 'react'
import styles from './styles/subtitle.module.css'

function Subtitle(props) {
    return (
        <div className="content-block-title">
            <p className={styles.subtitle}>{props.subtitle.text}</p>
        </div>
    )
}

export default Subtitle
