import { useState } from 'react'
import LifeCycleFunction from './LifeCycleFunction'
function LifeCycleMain() {
  const [show, setShow] = useState(true)
  return (
    <>
      <button
        onClick={() => {
          setShow(!show)
        }}
      >
        {show ? '移除' : '顯示'}
      </button>
      <hr />
      {show && <LifeCycleFunction />}
    </>
  )
}

export default LifeCycleMain
