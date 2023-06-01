import { useState } from 'react'

function JsxIf() {
  const [total, setTotal] = useState(0)

  // 真值表
  //   console.log('3 && 8:', 3 && 8) // 8
  //   console.log('3 && 0:', 3 && 0) // 0
  //   console.log('0 && 8:', 0 && 8) // 0
  //   console.log('0 && 0:', 0 && 0) // 0

  return (
    <>
      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        按了++
      </h1>
      <p>目前數字：{total}</p>
      {total !== 0 ? <p>三元運算：{total}</p> : ''}
      {/* 務必讓&&前面的表達式計算出布林值(利用!!強制轉為布林值)或(比較運算 > < !== ===) ，以免因falsy會呈現出不要的值 */}
      {!!total && <p>短路求值&&：{total}</p>}
      {/* 本來是0(!!後即false，前false後true，顯示後面的值)，按了以後變有值(!!變true，前true就顯示前面，但布林值在JSX裡不會顯示) */}
      {!!total || <p>短路求值||：{total}</p>}
      {total > 0 && <p>比較運算子+短路求值：{total}</p>}
    </>
  )
}

export default JsxIf
