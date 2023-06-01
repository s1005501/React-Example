import { useState } from 'react'
import ChildB from './ChildB'

function ParentB() {
  // 父母元件定義一個，準備接受來自子女元件的資料的狀態
  const [dataFromChildB, setDataFromChildB] = useState('')

  return (
    <>
      <h1>我是ParentB</h1>
      <p>來自子女B的資料 : {dataFromChildB}</p>
      <hr />
      <ChildB setDataFromChildB={setDataFromChildB} />
    </>
  )
}

export default ParentB
