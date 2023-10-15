import { combineReducers } from 'redux'

import { auth } from './auth'
import { counter } from './counter'

// 在舊版的redux裡要同時使用到多個狀態時，要透過combineReducers
// 功能是可以把多個不同的reducer函數(個別)合併整合成一個最終的reducer函數(總體)，而之前個別的reducer函數則以物件值的方式作為總體reducer函數的參數
// 也就是說combineReducers的參數是一個物件，裡面放的就是個別的reducer，格式如下
// export const 自訂義變數(通常會叫reducers)=combineReducers({
//     不同的reducer,
//     不同的reducer,...
// })

// 實際使用
// 把combineReducers從redux解構匯入
// 再把reducer的JS檔通通都匯入
// 透過自訂義變數(reducers)承接combineReducers
// 再把匯入的不同的reducer放到承接combineReducers的參數{}裡即可
export const reducers = combineReducers({
  auth,
  counter,
})
