import React from 'react'
import styles from "./login.module.css"
const login = () => {
  return (
    <div className={styles.container}>    
      <div>login</div>
    <div className={styles.form}>
    <form >
      {/* USERNAME */}
      <div>
      <label htmlFor="">Email</label>
      <input
        type="text"
        placeholder="Email..."
        name="email"
        value="email"
      />
      </div>

      {/* PASSWORD */}
      <div>
      <label htmlFor="">Password</label>
      <input
        type="password"
        placeholder="Password..."
        name="password"
        value="password"
      />
      </div>
      <div>
      <button>LOGIN</button>
      </div>
    </form>
  </div>
  <div>¿Eres nuevo en BookScape?</div>
  <div>Crea tu cuenta de BookScape</div>
  </div>

  )
}

export default login