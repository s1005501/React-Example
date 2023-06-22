import NotLogin from './NotLogin'
import Login from './Login'
import { useSelector } from 'react-redux'

function Profile() {
  const state = useSelector((state) => state.user)

  return (
    <>
      <div style={{ margin: '50px' }}>
        {state.profile.login ? <Login /> : <NotLogin />}
      </div>
    </>
  )
}

export default Profile
