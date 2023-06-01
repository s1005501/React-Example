import React from 'react'

function Key() {
  const arr = [{ name: 'Kevin' }, { name: 'Hank' }, { name: 'Eric' }]

  return (
    <>
      {arr.map((v, i) => {
        {
          /* 利用i+random出來的值當key值 */
        }
        const rnd = Math.floor(Math.random() * 1000)
        v.id = i + '.' + rnd

        {
          /* 用+new Date()跑回圈加key時，會有重複的問題產生，但可以搭配事件使用，ex:onClick時加一個新元素進集合時就可以用 */
        }
        console.log(v)
        return <p key={v.id}>{v.name}</p>
      })}
    </>
  )
}

export default Key
