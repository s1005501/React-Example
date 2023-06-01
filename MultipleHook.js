// 以下是Hook(函式元件)的元件的各種語法

// react/cra官方文件&教學寫法
// function MultipleHook() {
//   return <></>
// }
// export default MultipleHook

// 上面的寫法將`export default`合併寫(react/next.js新版官方文件多用此寫法)
// export default function MultipleHook() {
//   return <></>
// }

// 函式表達式語法(不推薦)
// const MultipleHook = function () {
//   return <></>
// }
// export default MultipleHook

//  箭頭函式語法(react - native教學文件用此寫法)
// const MultipleHook = () => {
//   return <></>
// }
// export default MultipleHook

// 或
// const MultipleHook = () => <></>
// export default MultipleHook

// class元件(類別型元件)的寫法，雖然class漸漸被Hook取代但還是要懂，以後爬文、維護可能會遇到
// import React from 'react'

// // 注意這裡沒有小括號( )
// class MultipleHook extends React.Component {
//   constructor() {
//     // super()為呼叫父母類別的建構式，即React.component
//     super()
//     // 宣告定義狀態，其狀態一定是一個物件
//     this.state = {}
//   }
//   render() {
//     return <></>
//   }
// }
// export default MultipleHook
