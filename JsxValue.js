function JsxValue() {
  return (
    <>
      <h1>JSX語法中各種值的呈現</h1>
      <h2>Number</h2>
      {123 - 99}
      {NaN}

      <h2>String</h2>
      {'abc'}
      {`total=${100 - 5}`}

      <h2>Boolean</h2>
      {/* 布林值不會被呈現 */}
      {true}
      {false}
      {1 > 0}

      <h2>null</h2>
      {/* 不會被呈現 */}
      {null}

      <h2>undefined</h2>
      {/* 不會被呈現 */}
      {undefined}

      <h2>Object</h2>
      {/* 會造成中斷錯誤 */}
      {/* {{ a: 1, b: 2 }} */}

      <h2>Array</h2>
      {[1, 2, 3, 4]}

      <h2>Function</h2>
      {() => {}}
    </>
  )
}

export default JsxValue
