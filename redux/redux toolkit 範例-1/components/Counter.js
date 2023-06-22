// 在元件裡真的使用
// 從react-redux引入useDispatch、useSelector
// 從slice引入slice.action
// 呼叫useDispatch( )並用自訂義變數dispatch承接
// 透過useSelector( )從 store 裡面去拿取想要的 state 出來。需要注意的一點是，因為slice有好幾個，因此要拿到正確的state就要透過當初我們在store.js的reducer裡的key值(slice的name，應該???)
// 最後使用dispatch的時候，()內給的值是slice.action裡面的function(這就是action的type)，如果該function還有參數則該值就action的payload，用法就跟createAction()一樣。
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../store/counter'

// 使用異步時要先把createAsyncThunk定義好的變數引入
import { getAsyncData } from '../store/asyncData'

function Counter() {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter.counter)
  const show = useSelector((state) => state.counter.showCounter)
  const asyncData = useSelector((state) => state.asyncData.asyncData)

  // console.log(counterActions)
  // console.log(asyncDataActions)
  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase(10))
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  }

  // 透過dispatch觸發createAsyncThunk定義好的變數
  const axiosCity = () => {
    dispatch(
      getAsyncData(
        'https://raw.githubusercontent.com/JiaAnTW/mask/master/dist.json'
      )
    )
  }
  return (
    <>
      {show && <div>{counter}</div>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={increaseHandler}>Increase by 10</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={axiosCity}>Get AsyncData</button>
      <div>
        {asyncData.cityList?.map((v, i) => {
          return <p>{v}</p>
        })}
      </div>
    </>
  )
}

export default Counter
