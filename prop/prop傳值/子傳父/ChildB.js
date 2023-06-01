import { useState, useEffect } from 'react'

function ChildB({ setDataFromChildB }) {
  const [childData, setChildData] = useState('')

  // 方式一，利用useEffect渲染畫面後會再執行一次的特性，來達到將資料傳給父母效果(類似onChange事件)。
  // 此元件初次render會執行一次第一個傳入參數，即箭頭函式中程式碼。接下來當childData有變化時，會再執行一次
  // 出現eslint警告，是因為它認為setDataFromChildB也需要加入到此陣列中，但此例中並不需要，加與加都無關緊要
  // 此陣列參數稱為"相依性陣列"DependencyList，意即第一參數(函式)的執行，會相依照第二參數中放入的變數值變化來觸發執行

  // useEffect(() => {
  //   setDataFromChildB(childData)
  // }, [childData])

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
