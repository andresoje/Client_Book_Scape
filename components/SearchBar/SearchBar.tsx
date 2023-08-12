import React from 'react'

import styles from './SearchBar.module.css'

function SearchBar( ) {
   
  return (
    <form className={styles.wrapperSearch}>
      <input
        className={styles.input}
        type="search"
      />
      <button className={styles.btn}  >
        Search
      </button>
    </form>
  )
}

export default SearchBar
