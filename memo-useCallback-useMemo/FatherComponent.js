// memo useCallback useMemo
// memo(淺比較)、useCallback(鎖定參照)主要負責比對傳值(props)，避免重複渲染
// useMemo主要處理複雜運算的code，暫存其結果

import { useState, useCallback, useMemo, useEffect } from 'react'
import ChildComponent from './ChildComponent'

const expensiveFunction = (number) => {
  for (let i = 0; i < 1000000000; i++) {}
  return number * 10
}

function FatherComponent() {
  console.log('Father Render...')
  const [value, setValue] = useState('')

  // memo
  // 如果我們把function傳下去給子元件，即使子元件不使用，當父元件因變更狀態而reRender時，子元件也會做reRender。這是因為memo的概念是淺比較，但function是沒辦法去做比較的(參照不同)，因此react認為其是不相等的而reRender。同樣無法比較的還有陣列跟物件

  // 但透過useCallback就可以類似將參照鎖住得概念
  // 用法類似useEffect+memo，將要執行的code當成是useCallback的第一個參數放進callback裡
  // 第二個參數是dependency([])，[]內的dependency有做變更才做reRender的動作
  // 格式：const 變數 = useCallback(()=>{執行內容},[dependency])
  const sayHello = useCallback(() => {
    console.log('Hello')
  }, [])

  // useMemo是用於處理複雜運算、高耗時的code，期可以將這類code執行結果暫存起來
  // 用法跟useCallback一樣，將要執行的code當成是useMemo的第一個參數放進callback裡
  // 第二個參數是dependency([])，[]內的dependency有做變更才做重新計算的動作
  // 官方不建議太常使用useMemo，因為最終還是要有地方去儲存透過useMemo結果
  // 格式：const 變數 = useMemo(()=>{執行內容},[dependency])
  const expensiveValue = useMemo(() => {
    return expensiveFunction(10)
  }, [])

  const ManyItem = useMemo(() => {
    console.log('ManyItem Render...')
    const arr = new Array(100).fill(1)
    return (
      <>
        {arr.map((v, i) => {
          return <p key={i}>{i}</p>
        })}
      </>
    )
  }, [])

  // useMemo處理物件或陣列
  // 物件
  const user = useMemo(() => {
    return {
      id: 1,
      name: 'Kevin',
    }
  }, [])

  // 陣列
  // const user = useMemo(() => {
  //   return [
  //     { id: 1, name: 'Kevin' },
  //     { id: 2, name: 'Hank' },
  //   ]
  // }, [])

  // 檢查user物件有沒有被重新建立
  useEffect(() => {
    console.log('create user obj')
  }, [user])

  return (
    <>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
          }}
        />
        <p>{value}</p>

        <ChildComponent number={1234} sayHello={sayHello} />

        <p>expensiveValue ： {expensiveValue}</p>

        <p>user Id ： {user.id}</p>
        <p>user Name ： {user.name}</p>

        {ManyItem}
      </div>
    </>
  )
}

export default FatherComponent
