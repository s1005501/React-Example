// 在上層元件(通常是index.js、App.js)，引入從react-redux解構出來的Provider
import { Provider } from 'react-redux'
// 引入store
import store from './store/index'
import Counter from './Counter'

function App() {
  return (
    // 用Provider夾住子元件，並把store傳下去
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}

export default App

// 特性：
// 和React一起使用的話需要使用react-redux將兩者銜接起來，透過react-redux可以將store內的state注入到元件內，但react-redux算是舊用法(官方建議改用toolkit)
// Redux架構圍繞著嚴格的單向資料流
// Redux主要由action、reducer、store等三個部分構成，以下詳細說明它們的作用&整個redux運作的過程圖

// 優點：
// 方便管理state。沒有使用Redux的話，我們要透過props(層數太多太深，會要傳很多很多次)、useContext(層數太多太深，會影響效能，因為每次變更都會重新渲染)將state進行傳遞，如果有Redux 就可以將state集中管理，有需要時再從 store傳遞給元件。
// 透過Redux也可以將操作元件state的邏輯部分從元件抽離出來，達到元件做純渲染，Redux處理資料邏輯的結果。

// 缺點：
// 不能回傳undefined(或沒有回傳值)，其他值則都可以
// 第一次呼叫reducer時會傳入兩個參數: 之前產生的state(可以給state預設值)和傳入的action
// reducer 是純粹函式(不得執行有副作用的程式碼)
// 常見的 side effects 包括:
// 發送Http的AJAX請求(!重要，要解決這個問題要再搭配使用redux-thunk，redux-thunk類似middleware)
// 使用異步的定時器(setTimeout、setTimeInterval)
// 使用隨機亂數的API(Math.random())
// 操控此function外的state

// 要用immutable(不可變物件)的方式對陣列和物件進行變更，即不能直接透過=來賦值，要透過沒有副作用的方式，比如陣列要用map、filter、展開運算子，物件用展開運算子
