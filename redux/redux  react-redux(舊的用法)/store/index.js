// 官方鼓勵使用者去使用toolkit
// 這支JS就是store，state 放在這邊做管理

// 從redux解構createStore後引入
import { createStore } from 'redux'

// counterReducer這個function就是reducer，第一次呼叫一定要有兩個傳參，分別是state(這裡是以給預設值的方式)、action
const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
  console.log('state', state)
  console.log('action', action)
  // 這裡就是判斷state要做怎樣的變動的地方，透過action物件的type屬性
  if (action.type === 'increment') {
    return { counter: state.counter + 1, showCounter: state.showCounter }
  }

  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    }
  }

  if (action.type === 'decrement') {
    return { counter: state.counter - 1, showCounter: state.showCounter }
  }

  if (action.type === 'toggle') {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    }
  }
  // 在reducer的最後記得要加上return state當預設值
  return state
}

// 使用createStore建立store，createStore()內塞的就是上面的reducer
const store = createStore(counterReducer)

export default store
