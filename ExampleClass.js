import React from 'react'

// class元件(類別型元件)的寫法，雖然class漸漸被Hook取代但還是要懂，以後爬文、維護可能會遇到
// 注意! 定義class時不用加小括號( )
// 在class元件裡state、setState是固定名稱，不能自訂義取名 
class ExampleClass extends React.Component {
  constructor() {
    // super()為呼叫父母類別的建構式，即React.component
    super()
    // 再constructor裡透過this.state宣告定義狀態，且其狀態一定是一個物件
    this.state = {
      // 設定初始值
      total: 0,
    }
  }

  render() {
    return (
      <>
        <button
          onClick={() => {
            // setState的()裡面要是物件的鍵質對格式
            this.setState({ total: this.state.total + 1 })
          }}
        >
          ++
        </button>
        {/* 使用狀態值要透過this.state */}
        <p>{this.state.total}</p>
      </>
    )
  }
}
export default ExampleClass
