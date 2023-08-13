import React from 'react'
import styles from './SearchBar.module.css'

function SearchBar( ) {
   
  return (
    <div> 
    <div className={styles.inputbox} >
      <input type="text" placeholder="¿Que quieres leer Hoy?" />
      <button className={styles.button}>Buscar</button>
    </div>
    </div>
   
  )
}

export default SearchBar
