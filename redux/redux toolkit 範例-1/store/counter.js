// 建立用來裝slice的JS檔，建議可以取類似state的名稱，較好區分
// 從toolkit(在package.json裡是叫@reduxjs/toolkit)引入createSlice
// 透過createSlice建立slice function，裡面要有三個東西，name、initialState、reducers。
// name是slice的名稱(在store裡會用到，應該???，不確定到底用在哪)
// initialState是state得初始值(預設值)
// reducers(記得要加s)，是純函式，action就寫在裡面(定義action type的地方)
// 最後用變數承接slice.actions、slice.reducer後匯出

import { createSlice } from '@reduxjs/toolkit'
const initialCounterState = { counter: 0, showCounter: true }

// slice是將state、createAction、createReducer再一起了，程式碼很簡潔
// 裡面要有三個東西，name、initialState、reducers
// name是slice的名稱(在store裡會用到，應該???，不確定到底用在哪)
// initialState是state得初始值(預設值)
// reducers(記得要加s)，是純函式，action就寫在裡面(定義action type的地方)

// slice的格式大概是這樣，不用再給action type了，react-redux給action type的部分由直接呼叫action()取代
// const slice = createSlice({
//   name: 'slice的名稱',
//   initialState: state的初始值(預設值),
//   reducers: {
//     // 底下就是slice.actions
//     action(state, payload) {
//       // 不用return值
//       變更state的程式碼
//     },
//   },
// })

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,

  // createReducer在此範例裡已經被整合進slice裡，就是slice裡的reducers
  reducers: {
    // createAction在此範例裡已經被整合進slice裡，slice裡面的actions就是產生action creators跟定義action type的地方
    // 底下這些就是counterSlice.actions
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    // increase就是action type，其()內的第二個參數就是payload
    increase(state, action) {
      state.counter = state.counter + action.payload
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter
    },
  },
})
export const counterActions = counterSlice.actions

const counterReducer = counterSlice.reducer
export default counterReducer

// createAction一般使用長這樣
// import { createAction } from '@reduxjs/toolkit'
// const increment = createAction('counter/increment')
// let action = increment()
// // { type: 'counter/increment' }
// action = increment(3)
// // returns { type: 'counter/increment', payload: 3 }
