import { useState } from 'react'
import Child from './ChildA'

function ParentA() {
  const [parentData, setParentData] = useState('Parents傳下去的資料')
  return (
    <>
      <Child parentData={parentData} />
    </>
  )
}

export default ParentA
