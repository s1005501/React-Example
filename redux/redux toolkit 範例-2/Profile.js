import React from 'react'
import NotLogin from './NotLogin'
import Login from './Login'

function Profile() {
  return (
    <>
      <div style={{ margin: '50px' }}>
        <NotLogin />
        <hr />
        <Login />
      </div>
    </>
  )
}

export default Profile
