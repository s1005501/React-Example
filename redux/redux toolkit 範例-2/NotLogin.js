import React from 'react'

function NotLogin() {
  const handleLogin = () => {}
  return (
    <>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" placeholder="name" name="name" id="name" />
        <br />
        <label htmlFor="age">Age:</label>
        <input type="text" placeholder="age" name="age" id="age" />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="text" placeholder="email" name="email" id="email" />
        <br />
        <button onClick={handleLogin}>Login</button>
      </div>
    </>
  )
}

export default NotLogin
