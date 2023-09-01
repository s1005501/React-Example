import PropChild from './PropChild'

function PropFather() {
  const obj = { name: 'Kevin', county: 'Taipei', age: 30 }
  return <PropChild {...obj} />
}

export default PropFather
