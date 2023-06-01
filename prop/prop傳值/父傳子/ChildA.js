import React from 'react'

function ChildA({ parentData = 'no data' }) {
  return (
    <>
      <h1>ChildA</h1>
      <p>從Parent來的資料: {parentData}</p>
    </>
  )
}

export default ChildA
