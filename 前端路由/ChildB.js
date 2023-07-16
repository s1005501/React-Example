import React from 'react'
import { useOutletContext } from 'react-router-dom'

function ChildB() {
  // 子元件直接用變數去承接useOutletContext()就可以拿到Outlet透過context傳下來的資料了
  // useOutletContext是react-router-dom裡的東西
  const outletContextData = useOutletContext()
  console.log(outletContextData)
  return (
    <>
      <h1>我是ChildB</h1>
    </>
  )
}

export default ChildB
