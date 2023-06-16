function InlineStyle() {
  // 在react裡要使用inline style有兩種方式(不使用其他外掛的前提)
  // 第一種是直接把CSS寫進html的style屬性裡，CSS外層要再用{ }包起來，CSS屬性可以直接寫，但其值要加雙引號。不同屬性以逗點隔開。此種方式不好維護，且無法和其他元素共用

  // 第二種是用變數去承接CSS的屬性後在寫進html的style屬性裡。這種作法相較第一種稍微好管理一點，且也可和其他元素共用

  // inline style的缺陷是media(RWD)、或類似事件觸發的功能是無法使用的(hover)
  const secondStyle = {
    color: 'blue',
    fontSize: '36px',
  }
  return (
    <>
      <p style={{ color: 'red', fontSize: '24px' }}>
        我是第一種inline style的寫法
      </p>
      <p style={secondStyle}>我是第二種inline style的寫法</p>
      <p style={secondStyle}>套用第二種的style</p>
    </>
  )
}

export default InlineStyle
