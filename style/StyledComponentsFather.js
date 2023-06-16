import StyledComponentsChild from './StyledComponentsChild'

function StyledComponentsFather() {
  const skyblue = 'skyblue'
  return (
    <>
      <StyledComponentsChild skyblue={skyblue} />
    </>
  )
}

export default StyledComponentsFather
