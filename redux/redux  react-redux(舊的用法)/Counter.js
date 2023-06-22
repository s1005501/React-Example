// 在子元件裡從react-redux解構useSelector、useDispatch後引入
import axios from 'axios'
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
  const payload = useSelector((state) => state.payload)
  const asyncData = useSelector((state) => state.asyncData)

  const incrementHandler = () => {
    // 真的使用時是用自訂義變數(dispatch)來觸發，()內可以放兩個參數，分別是action的type跟payload。格式如下
    // dispatch({ type: '動作', payload: '資料' })
    // 第一個放的是action.type的type的動作，發出後會去觸發store的reducer，更改state
    // 第二個參數是action.payload，即要傳遞給reducer的資料，底下的amount就是payload
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

  // 非同步
  // Redux-Thunk就是一個簡化Redux處理非同步事件的中介層套件，也就是middleware，其主要的功能是可以function裡再呼叫function
  // 原本的action creator(dispatch()那個function)都是回傳action object，在Redux Thunk裡面會檢查若action不是object而是function(發AJAX的異步function)的話，就會執行function後再將action往下傳，直到回傳object才會進去reducers。
  // 所以說要執行異步的話，dispatch()裡面要放的是執行異步的function，在異步function再執行一個dispatch，這個dispatch就是真的要去發action、決定payload
  const getAsyncData = () => {
    // async function
    const axiosCity = () => {
      return async () => {
        const response = await axios.get(
          'https://raw.githubusercontent.com/JiaAnTW/mask/master/dist.json'
        )
        console.log('response.data', response.data)
        // 裡面再一個dispatch，才是真的發action去改state的function
        dispatch({ type: 'getAsyncData', asyncData: response.data })
      }
    }
    // dispatch(async function)
    dispatch(axiosCity())
  }

  return (
    <>
      {/* 透過useSelector拿到state值後就可以在React的return裡使用了 */}
      {show && <div>{counter}</div>}
      {<div>{payload}</div>}

      {/* 查看非同步結果 */}
      {console.log('asyncData', asyncData)}

      {/* 透過事件觸發變更state的function */}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>decrement</button>
      <button onClick={increaseHandler}>Increase by 10</button>
      <button onClick={toggleHandler}>Toggle</button>
      <button onClick={getAsyncData}>getData</button>
      {asyncData.cityList?.map((v, i) => {
        return <p key={i}>{v}</p>
      })}
    </>
  )
}

export default Counter
