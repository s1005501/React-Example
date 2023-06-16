import axios from 'axios'
import { useEffect, useState } from 'react'
// 在子元件裡從react-redux解構useSelector、useDispatch後引入
import { useSelector, useDispatch } from 'react-redux'

function Counter() {
  // useDispatch()，簡單來說就是可以發出action的function
  // 使用時要先呼叫出來並用自訂義變數承接(通常就叫dispatch)，格式如下
  // const dispatch = useDispatch()
  const dispatch = useDispatch()

  // useSelector()，可以從 store 裡面去拿取想要的 state 出來，格式如下
  // const 承接state值的變數=useSelector((state)=>state.屬性)
  const counter = useSelector((state) => state.counter)
  const show = useSelector((state) => state.showCounter)

  const incrementHandler = () => {
    // 真的使用時是用自訂義變數(dispatch)來觸發，()內要放的是action.type的type的動作，發出後會去觸發store的reducer，更改state。格式如下
    // dispatch({ type: '動作' })
    dispatch({ type: 'increment' })
  }
  const decrementHandler = () => {
    dispatch({ type: 'decrement' })
  }

  const increaseHandler = () => {
    dispatch({ type: 'increase', amount: 10 })
  }
  const toggleHandler = () => {
    dispatch({ type: 'toggle' })
  }

  return (
    <>
      {/* 透過useSelector拿到state值後就可以在React的return裡使用了 */}
      {show && <div>{counter}</div>}
      {/* 透過事件觸發變更state的function */}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>decrement</button>
      <button onClick={increaseHandler}>Increase by 10</button>
      <button onClick={toggleHandler}>Toggle</button>
    </>
  )
}

export default Counter
