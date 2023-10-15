import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function ReactReduxMultiple() {
  const auth = useSelector((state) => state.auth)
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const increase = () => {
    dispatch({ type: 'increase' })
  }
  const decrease = () => {
    dispatch({ type: 'decrease' })
  }
  const hide = () => {
    dispatch({ type: 'hide' })
  }
  const show = () => {
    dispatch({ type: 'show' })
  }

  return (
    <>
      {auth.auth ? <p>{counter.counter}</p> : null}
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
      <button onClick={show}>show</button>
      <button onClick={hide}>hide</button>
    </>
  )
}

export default ReactReduxMultiple
