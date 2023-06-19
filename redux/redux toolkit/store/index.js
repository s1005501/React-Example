// 建立一支叫store的JS，來把之前的slice整合在一起
// 從toolkit引入configureStore
// 把各slice裡匯出的slice.reducer引入進來
// 使用configureStore()，()內用來放上面引入的slice.reducer，key值用reducer，value值放slice.reducer
// 如果是單個slice，則reducer的value直接給slice匯出的reducer就好
// 如果是複數的slice，要用{ }，key值就是slice的name(應該???，不是很確定))，value給slice匯出的reducer
import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './counter'
import authReducer from './auth'
// 統一管理slice的地方
// 跟createStore一樣，()內要放reducer。
// 如果是單個slice，則reducer的value直接給slice匯出的reducer就好
// 如果是複數的slice，要用{ }，key值就是slice的name(應該???，不是很確定))，value給slice匯出的reducer
// const store=configureStore({
//     reducer:{slice的name:slice匯出的reducer}
// })

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
})

export default store
