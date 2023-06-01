import React from 'react'
// 注意()內的props沒有{}，{}是解構的用法，有{}就沒辦法使用props.children這個屬性了
function Father(props) {
  console.log(props.children)
  return (
    <>
      <h1>我是爸爸元件Father的H1</h1>
      <div>{props.children}</div>
    </>
  )
}

export default Father

// // 也可以寫成這種形式
// // children就是從props解構出來的，可以少寫一些字
// function Father({ children }) {
//   console.log(children)
//   return (
//     <>
//       <h1>我是爸爸元件Father的H1</h1>
//       <div>{children}</div>
//     </>
//   )
// }

// export default Father
