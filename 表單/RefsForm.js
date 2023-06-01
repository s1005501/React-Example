import { useRef } from 'react'

function RefsForm() {
  // 宣告後 inputRef = { current: null }
  // 用null值作為初始化值，是要對比getElementById的設計，
  // getElementById如果沒找到匹配元素物件則返回null
  const inputRef = useRef(null)

  return (
    <>
      <h1>RefsForm</h1>
      {/* 不可控表單元件 */}
      <input type="text" ref={inputRef} />
      {/* 以下為操作用按鈕 */}
      <button
        onClick={() => {
          // 使用時要使用 inputRef.current 得到元素的物件實體
          inputRef.current.focus()
        }}
      >
        聚焦focus
      </button>
      <button
        onClick={() => {
          inputRef.current.blur()
        }}
      >
        失焦blur
      </button>
      <button
        onClick={() => {
          console.log(inputRef.current.value)
        }}
      >
        印出值
      </button>
    </>
  )
}

export default RefsForm
