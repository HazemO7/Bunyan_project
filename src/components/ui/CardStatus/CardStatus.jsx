import React from 'react'
import styles from './CardStatus.module.css'


export default function CardStatus({ counter, title, icon }) {
  return (
    <>
    <div className={` ${styles.cardStatus} d-flex align-items-center `}>
        <div className={`${styles.icon} d-flex align-items-center justify-content-center w-100`}>
        <i className={icon}></i>
        </div>
        <div className={`${styles.info} w-100 d-flex flex-column align-items-center justify-content-center`}>
        <span className={styles.counter}>{counter}</span>
        <span className={styles.title}>{title}</span>
        </div>
    </div>
    </>
  )
    
}
