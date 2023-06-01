import { useEffect, useState } from 'react'

function StateChangeType() {
  const [stateType, setStateType] = useState('原本的型態是字串')
  useEffect(() => {
    console.log(typeof stateType)
    console.log(stateType)
  }, [stateType])

  return (
    <>
      <button
        onClick={() => {
          // 不可以直接使⽤JS中的指定值運算語法來更動(ex： state = 1)，因為只有setState才能對state作變更
          // stateType = [...stateType]

          // state在設定完初始值的型態後，是可以透過setState做型態上的轉變的，比如這裡是字串變陣列
          setStateType([...stateType])
        }}
      >
        按下去改型態
      </button>
      <p>{stateType}</p>
    </>
  )
}

export default StateChangeType
