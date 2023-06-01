import { useContext } from 'react'
import ExampleContext, { useExampleContext } from './ExampleContext'

function ContextChild() {
  // 真的要取資料的時候要透過useContext，格式如下
  // const {解構資料}=useContext(context)
  const { exampleState, setExampleState } = useContext(ExampleContext)

  // 這種是把useContext一起匯出的取資料方式
  // const { exampleState, setExampleState } = useExampleContext()

  return <div>{exampleState}</div>
}

export default ContextChild
