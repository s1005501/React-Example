import { useState } from 'react'

function Prev() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  return (
    <>
      <button
        onClick={() => {
          // 這個只會+1，原因是因為在react裡，他會讀完你事件裡的所有code以後才去執行更改狀態的動作，也就是說react不會讀完第一行就把count1+1，而是去執行你最後一個更改狀態的setState(程式邏輯下蓋上)
          setCount1(count1 + 1)
          setCount1(count1 + 3)
          setCount1(count1 + 1)
        }}
      >
        count1 + +
      </button>
      <button
        onClick={() => {
          // 在React裡，如果在執行過程中有多個操作都有變動狀態時，其最終需要的只是要render出來的那個值，因此可以透過prev變數就能準確拿到上一個狀態的值，比如在底下的範例裡，prev=>prev+1執行了三次，結果是按一次+3就是因為prev取得前一個狀態的值，因此底下每行的prev的值都是不一樣的(上一行的結果)
          // 此外要使用prev只能透過函式的方式去執行，即把prev當成是function的變數去操作
          setCount2((prev) => prev + 1)
          setCount2((prev) => prev + 1)
          setCount2(function (prev) {
            return prev + 1
          })
        }}
      >
        count2 + +
      </button>
      <p>count1: {count1}</p>
      <p>count2: {count2}</p>
    </>
  )
}

export default Prev
