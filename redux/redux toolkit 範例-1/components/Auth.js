import { useDispatch } from 'react-redux'
import { authActions } from '../store/auth'

function Auth() {
  const dispatch = useDispatch()
  const loginHandler = (e) => {
    e.preventDefault()
    dispatch(authActions.login())
  }

  return (
    <>
      <form onSubmit={loginHandler}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <button>Login</button>
      </form>
    </>
  )
}

export default Auth
