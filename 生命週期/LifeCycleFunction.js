import { useState, useEffect } from 'react'

function LifeCycleFunction() {
  const [total, setTotal] = useState(0)
  //  didMount (After render)
  //  相依性陣列中沒有任何變數，代表初次render"後"僅會執行一次
  useEffect(() => {
    console.log('模擬didMount')
  }, [])

  //  didMount + didUpdate (After render)
  //  相依性陣列中有total(是狀態)，代表初次render"後"會執行一次+當total有改變時，render"後"會在執行一次，相當於以total來觸發onChange事件
  useEffect(() => {
    console.log('模擬didMount+didUpdate')
  }, [total])

  // willUnMount (Before remove)
  // 外面的function是每次重新渲染"後"會觸發一次
  // 裡面的function是每次渲染結束"後"，要開始下一次渲染"前"會執行的部分，因此可以達到變動後清除某些狀態、事件的效果
  useEffect(() => {
    return () => {
      console.log('模擬willUnMount')
    }
  }, [])

  return (
    <>
      {console.log('render')}
      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
    </>
  )
}

export default LifeCycleFunction
