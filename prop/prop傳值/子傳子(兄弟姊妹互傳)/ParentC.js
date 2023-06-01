import { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

function ParentC() {
  // 父母元件定義一個，準備接受來自子女元件的資料的狀態
  const [dataFromChildB, setDataFromChildB] = useState('')
  return (
    <>
      <ChildA dataFromChildB={dataFromChildB} />
      <hr />
      <ChildB setDataFromChildB={setDataFromChildB} />
    </>
  )
}

export default ParentC
