import React, { useEffect, useState } from 'react'

function ExampleUseEffect() {
  const [total, setTotal] = useState(0)

  // 1.綁定某個state、父母傳下來的props，其變動也跟著變化
  // 如果useEffect的dependency有東西時，代表初次render"後"會執行一次+當dependency有改變時，render"後"會在執行一次
  // 模擬生命週期didUpdate
  useEffect(() => {
    console.log('用法一:綁定dependency')
  }, [total])

  // 2.變動後取消、清除狀態或事件
  // 外面的func是每次重新渲染"後"會觸發一次
  // 裡面的func是每次渲染結束"後"，要開始下一次渲染"前"會執行的部分，因此可以達到變動後清除某些狀態、事件的效果
  // 模擬生命週期willUnMount
  useEffect(() => {
    // 綁定
    console.log('用法二:外層的function')
    console.log('render完後執行')
    return () => {
      // 取消綁定
      console.log('用法二:取消綁定')
      console.log('render完後，下一次render前執行')
    }
  }, [total])

  // 3.只需要執行一次的奘況
  // 因為useEffect有必執行一次的效果，因此如果我們把其依賴拿掉它就永遠只會執行一次
  // 模擬生命週期的didMount
  useEffect(() => {
    return () => {
      console.log('用法二:只需要執行一次')
    }
  }, [])

  // 4.把依賴移除就會讓其每次重新渲染時都會執行
  // 須注意以下會形成無限迴圈
  useEffect(() => {
    return () => {
      setTotal(total)
    }
  })

  return (
    <>
      {console.log('render')}
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        用法一:綁定dependency
      </button>

      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        用法二:取消綁定
      </button>

      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        用法四:無限迴圈
      </button>

      <p>total數量：{total}</p>
    </>
  )
}

export default ExampleUseEffect
