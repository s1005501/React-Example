import React from 'react'
// 解構的用法可以併用
function Child({ text }) {
  return (
    <>
      <h1>我是兒子元件Child拉</h1>
      <h2>{text}</h2>
    </>
  )
}

export default Child
