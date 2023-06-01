import React, { useEffect, useState } from 'react'

function GetFormValue() {
  const [inputValue, setInputValue] = useState('')
  useEffect(() => {
    console.log('State', inputValue)
  }, [inputValue])
  return (
    <>
      <form name="form1">
        <label htmlFor="first">第一種取得表單輸入值的方式：</label>
        <input
          type="text"
          value={inputValue}
          name="first"
          id="first"
          onChange={(e) => {
            setInputValue(e.target.value)
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault()
            const second = new FormData(document.form1)
            console.log('FormData', second.get('first'))
          }}
        >
          第二種取得表單輸入值的方式：FormData
        </button>
      </form>
    </>
  )
}

export default GetFormValue
