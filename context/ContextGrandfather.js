// 注意! 這裡要引入解構取出contextProvider，直接引入會出錯
import { ExampleContextProvider } from './ExampleContext'
import ContextFather from './ContextFather'

function ContextGrandfather() {
  // 注意! return裡用的是contextProvider這個元件，而不是context
  return (
    <>
      <ExampleContextProvider>
        <ContextFather />
      </ExampleContextProvider>
    </>
  )
}

export default ContextGrandfather
