import React, { useEffect, useState } from 'react'

// 執行順序是3=>1=>2=>3=>1=>2=3
// useEffect會執行2次setState的原因是因為第一次觸發setState更改狀態，第二次則是觸發完後去確認state有沒有做改變(淺比較)，比對完以後發現state是一樣的，因此只有render而沒有去觸發useEffect裡的code(dependency沒有變更)
// 如果把state改成陣列、物件、function等無法淺比較的資料的話就會形成無窮迴圈
function UseEffectTry() {
  const [tryState, setTryState] = useState('kevin')
  useEffect(() => {
    console.log(1)
    setTryState('john')
    console.log(2)
  }, [tryState])
  return (
    <>
      {console.log(3)}
      <p>{tryState}</p>
    </>
  )
}
export default UseEffectTry

// 所謂的淺比較大致上來說跟嚴格比較(===)很相似，但實際上淺比較是透過Object.is來做比對
// 淺比較可比對的多為基本型別的資料(字串、數字、布林值等...)，無法比較物件、陣列、函數這類參照類型的資料
// 而在react裡，淺比較的概念被廣泛使用，包含useState、props、dependency([])，因此使用上須多注意
