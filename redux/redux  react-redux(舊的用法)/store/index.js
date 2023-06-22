// 官方鼓勵使用者去使用toolkit
// 這支JS就是store，state 放在這邊做管理

// 從redux解構createStore、applyMiddleware(讓你可以使用middleware的function)後引入
import { createStore, applyMiddleware } from 'redux'

// 從redux-thunk引入thunk
import thunk from 'redux-thunk'

// counterReducer這個function就是reducer，第一次呼叫一定要有兩個傳參，分別是state(這裡是以給預設值的方式)、action
const counterReducer = (
  state = { counter: 0, showCounter: true, asyncData: {} },
  action
) => {
  // console.log('state', state)
  // console.log('action', action)

  // 這裡就是判斷state要做怎樣的變動的地方，透過action物件的type屬性
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
      asyncData: {},
    }
  }

  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
      asyncData: {},
    }
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
      asyncData: {},
    }
  }

  if (action.type === 'toggle') {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
      asyncData: {},
    }
  }

  // 非同步抓資料
  if (action.type === 'getAsyncData') {
    return {
      counter: state.counter,
      showCounter: state.showCounter,
      asyncData: action.asyncData,
    }
  }

  // 在reducer的最後記得要加上return state當預設值
  return state
}

// 使用createStore建立store，createStore()內塞的第一個傳參就是上面的reducer，第二個就是applyMiddleware()，再此範例要處理異步，因此其()內放的是thunk

const store = createStore(counterReducer, applyMiddleware(thunk))

export default store
