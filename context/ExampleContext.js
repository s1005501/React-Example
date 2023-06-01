// 這是把context、contextProvider、useContext合再一起的寫法
import { createContext, useContext, useState } from 'react'

// 首先透過createContext建立Context
const ExampleContext = createContext()
// 預設匯出
export default ExampleContext

// 其次建立一個function，通常會以context+Provider來命名，變數要塞解構的children，這個children就是之後引入帶入子元件的變數
export const ExampleContextProvider = function ({ children }) {
  // 要往下傳的資料
  const [exampleState, setExampleState] = useState('Context傳下去的資料')
  return (
    // 注意! return裡要用的是context.provider，要傳下去的資料用value屬性，裡面要再用一個{ }包起來
    <ExampleContext.Provider value={{ exampleState, setExampleState }}>
      {children}
    </ExampleContext.Provider>
  )
}

// 也可以把useContext也一起匯出，useContext一定要放在component、hook function裡使用，因此這裡不能直接給=，而是要裝function在匯出
export const useExampleContext = () => useContext(ExampleContext)
