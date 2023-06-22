import { useSelector, useDispatch } from 'react-redux'
import { authActions } from './store/auth'

import Counter from './components/Counter'
import Auth from './components/Auth'

function Example() {
  const dispatch = useDispatch()
  const isAuth = useSelector((state) => state.auth.isAuthenticated)

  const logoutHandler = (e) => {
    e.preventDefault()
    dispatch(authActions.logout())
  }

  return (
    <>
      {!isAuth && <Auth />}
      {isAuth && <button onClick={logoutHandler}>Logout</button>}
      <Counter />
    </>
  )
}

export default Example
