import React from 'react'

// 直接在傳入參數時解構+給預設值
// 如果要設預設值，是用=來賦值
// 可在Parent用VScode內建偵測功能，看到Child需要什麼屬性
function PropChild({ age = 'no age', propState }, props) {
  // props的寫法如下，但要多寫一行，不太建議
  //const { propState, age = 'no age' } = props

  return (
    <>
      <p>
        {propState} {age}
      </p>
    </>

    // 原有的預設屬性的寫法，類別型元件/函式型元件通用語法
    // PropChild.defaultProps = {
    //   propState: "no propState data",
    //   age: 'no age' ,
    // }
  )
}

export default PropChild
