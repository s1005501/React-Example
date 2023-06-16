import React from 'react'

function Login() {
  const handleLogout = () => {
    console.log(1111111)
  }

  return (
    <>
      <div>
        <p>Name:</p>
        <p>Age:</p>
        <p>Email:</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  )
}

export default Login
