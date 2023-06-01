import React, { useState } from 'react'
import PropChild from './PropChild'

function PropFather() {
  const [propState, setPropState] = useState('Kevin')
  return (
    <>
      {/* 有給值所以不套用預設 */}
      <PropChild propState={propState} age={30} />
      {/* 沒給值所以套用預設 */}
      <PropChild />
    </>
  )
}

export default PropFather
