import React from 'react'

class LifeCycleClass extends React.Component {
  constructor() {
    // 固定寫法，呼叫父母類別的建構式
    super()
    // 宣告狀態，類別型元件的狀態一定是物件
    this.state = {
      total: 0,
    }
  }

  // 在初次render後，會執行此方法中的程式碼(did = After)
  componentDidMount() {
    console.log('componentDidMount')
  }

  // 當state或props有改變時，render後，會執行此方法中的程式碼(did = After)
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  // 在元件要被從真實dom移除"前"，會執行此方法中的程式碼(will = Before)
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  //   要覆蓋掉React Component裡的render，功能相當於是hook裡的return
  render() {
    return (
      <>
        <h1
          onClick={() => {
            this.setState({ total: this.state.total + 1 })
          }}
        >
          {this.state.total}
        </h1>
      </>
    )
  }
}
export default LifeCycleClass
