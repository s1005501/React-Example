import React from 'react'

function PropChild({ name, county, age }) {
  return (
    <>
      <p>{name}</p>
      <p>{county}</p>
      <p>{age}</p>
    </>
  )
}

export default PropChild
