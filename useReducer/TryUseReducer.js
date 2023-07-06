import { useReducer } from 'react'

const initialState = { counter: 0 }

const reducer = (state, action) => {
  console.log('state', state)
  console.log('action', action)
  switch (action.type) {
    case 'increase':
      return { counter: state.counter + 1 }
    case 'decrease':
      return { counter: state.counter - 1 }
    case 'increaseTen':
      return { counter: state.counter + 10 }
    default:
      return { counter: 0 }
  }
}

function TryUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      Count: {state.counter}
      <br />
      <button type="button" onClick={() => dispatch({ type: 'decrease' })}>
        -1
      </button>
      ｜
      <button type="button" onClick={() => dispatch({ type: 'increase' })}>
        +1
      </button>
      ｜
      <button type="button" onClick={() => dispatch({ type: 'increaseTen' })}>
        +10
      </button>
    </div>
  )
}

export default TryUseReducer

// 用法有點介於useState、redux之間的感覺，跟redux一樣是透過action來觸發state得變更
// 首先先import useReducer from react
// 然後透過變數(initialState)去承接state的初始值(預設值)
// 再來建立reducer function，這個function會去判斷你傳進來的action type是什麼(動作)來決定state會做怎樣的變化。
// 傳參有兩個，分別是state、action。state即狀態，action即觸發的動作，透過底下的type屬性作判斷
// 裡面的判斷是透過switch/case，判斷的變數是action.type，case是判斷條件(通常會給變更狀態的敘述)。不用加break。但要記得回傳default，建議可以把initialState當預設回傳值

// 在元件裡使用時，跟useState用法很像，const宣告從useReducer()解構出來(這裡解構記得用中括號[])的state、dispatch(可以跟useState一樣叫setState，看個人習慣)。useReducer()的()內要放兩個參數，分別是之前的reducer、initialState
// 格式: const [state,dispatch]=useState(reducer,initialState)
// 使用時透過dispatch來觸發變更state，dispatch()內要放{}，key是type，value是變更狀態的敘述
// 格式: dispatch({type:"變更狀態的敘述"})
