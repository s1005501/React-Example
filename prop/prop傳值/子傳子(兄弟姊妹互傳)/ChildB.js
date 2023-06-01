import React, { useEffect, useState } from 'react'

function ChildB({ setDataFromChildB }) {
  const [childData, setChildData] = useState('')

  // 方式一，利用useEffect送出資料給父母
  useEffect(() => {
    setDataFromChildB(childData)
  }, [childData])

  return (
    <>
      <h1>我是ChildB</h1>
      <button
        onClick={() => {
          setChildData('hello')
        }}
      >
        change to hello
      </button>

      {/* 方式二: 利用事件觸發送資料回父母 */}
      <button
        onClick={() => {
          setDataFromChildB(childData)
        }}
      >
        送資料給Parent
      </button>
    </>
  )
}

export default ChildB
