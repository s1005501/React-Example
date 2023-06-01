import React, { useState } from 'react'

function DeepCopy() {
  const [items, setItems] = useState([
    { name: 'Kevin', age: 30 },
    { name: 'Eric', age: 29 },
    { name: 'Hank', age: 28 },
  ])
  // 深拷貝方式
  // 第一種方法是透過map迴圈淺拷貝(...展開)每個值，來達到深拷貝的效果，但缺點是只能複製一層，如果還有更深的的資料則其也要在跑一次淺拷貝迴圈
  const deepCopyMap = items.map((v, i) => {
    return { ...v }
  })
  console.log('deepCopyMap', deepCopyMap)
  console.log(deepCopyMap === items)

  // 第二種方法是透過轉成JSON在轉回來的方式，好處是不管多深的資料都可以複製的到
  const deepCopyJson = JSON.parse(JSON.stringify(items))
  console.log('deepCopyJson', deepCopyJson)
  console.log(deepCopyJson === items)
  return <></>
}

export default DeepCopy
