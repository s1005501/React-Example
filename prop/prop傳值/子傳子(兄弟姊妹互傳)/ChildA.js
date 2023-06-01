import React from 'react'

function ChildA({ dataFromChildB }) {
  return (
    <>
      <h1>我是ChildA</h1>
      <p>來自子女B的資料 : {dataFromChildB}</p>
    </>
  )
}

export default ChildA
