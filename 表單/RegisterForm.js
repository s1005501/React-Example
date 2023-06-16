import { useState } from 'react'

function RegisterForm() {
  // 物件狀態的初始值，必需要把裡面所有屬性寫出，針對不同欄位定義初始值
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  })

  // 記錄所有的欄位的錯誤訊息
  const [fieldErrors, setFieldErrors] = useState({
    username: '',
    email: '',
    password: '',
  })

  const handleFieldChange = (e) => {
    console.log(e.target.type, e.target.name, e.target.value)

    // 修正當使用者回頭輸入時，代表正在修正有錯誤欄位，先清空該欄位錯誤訊息
    // 可以用[]表示法來拿到e.target
    setFieldErrors({
      ...fieldErrors,
      [e.target.name]: '',
    })

    // 計算得來的屬性名稱(ES6) Computed property names (ES6)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
    const newUser = { ...user, [e.target.name]: e.target.value }

    setUser(newUser)
  }

  const handleSubmit = (e) => {
    // 阻擋表單預設送出行為
    e.preventDefault()

    // 得到表單輸入值的方式
    // 方式1.  - 從元件的state獲得
    console.log(user)

    // 方式2. 建立FormData物件
    // 可以用e.target
    const formData = new FormData(e.target)
    console.log(
      formData.get('username'),
      formData.get('email'),
      formData.get('password')
    )

    // 作其它客製檢查…整合…

    // 送到伺服器
  }

  // 當表單驗証時發生不合法時會觸發此事件
  const handleInvalid = (e) => {
    // 阻擋預設行為 - 錯誤訊息泡泡
    e.preventDefault()

    console.log(e.target.name, e.target.validationMessage)

    setFieldErrors({
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    })
  }

  return (
    <>
      <h1>會員註冊表單</h1>
      <form onSubmit={handleSubmit} onInvalid={handleInvalid}>
        <div>
          <label>帳號</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleFieldChange}
            required //必填屬性(HTML5使用)
          />
          {fieldErrors.username}
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleFieldChange}
            required
          />
          {fieldErrors.email}
        </div>

        <div>
          <label>密碼</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleFieldChange}
            required
            maxLength={10}
            minLength={6}
          />
          {fieldErrors.password}
        </div>
        <button type="submit">提交</button>
      </form>
    </>
  )
}

export default RegisterForm
