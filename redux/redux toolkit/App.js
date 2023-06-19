// 在上層元件(通常是index.js、App.js)，引入從react-redux解構出來的Provider，以及引入store
// 用Provider夾住子元件，並把store傳下去

import { Provider } from 'react-redux'
import store from './store'
import Example from './Example'

function App() {
  return (
    <>
      <Provider store={store}>
        <Example />
      </Provider>
    </>
  )
}

export default App

// Redux Toolkit 可以幫助你更方便的建立 Store、Actions 和 Reducers 並減少重複性質的程式碼。
// configureStore()
// 功能基本上和 createStore 一樣是用於建立 Store，但還可以結合 reducers、middleware、slice，能將複數的state依slice分門別類的統一管理

// createAction()
// 建立 action creator 的函式。放在 createAction() 裡面的參數會自動變成 action type
// 在產生action creator 之後，將參數帶進這個 action creator 會變成 action 的 payload

// createReducer()
// 使用它在撰寫 reducer 的時候可以不用再用 switch case 語法，並且它的語法底層加入了 immer，因此可以使用會有 side effect 的寫法去變更 state，它背後會再幫你轉成 「immutable」的方式

// createSlice()
// 也就是所謂的slice，可以將state、reducer、action 統整在一起的function， action creators 的產生 和 action type的定義都是在這邊做的。

// createAsyncThunk
// 用來處理非同步，會接受一個 action type 和一個回傳 promise 的 callback function，最後回傳一個 thunk action creator。這裡沒有用到

// 結構圖
// |-- src
//   |-- App.js(引入store，傳值下去的JS)
//     |-- Example.js(主元件)
//     |-- components
//     |   |-- Counter.js(子元件)
//     |   |-- Auth.js(子元件)
//     |-- store
//         |-- counter.js(slice)
//         |-- auth.js(slice)
//         |-- index.js(store)
