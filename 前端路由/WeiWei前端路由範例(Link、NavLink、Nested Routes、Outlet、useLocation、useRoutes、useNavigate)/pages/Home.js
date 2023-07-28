import { useLocation } from 'react-router-dom'

function Home() {
  // useLocation
  // 在react裡不能像在JS裡直接使用location，而是要透過react-router-dom裡的useLocation
  // 使用方式是先react-router-dom解構useLocation引入
  // 再用變數(一般都是用location來命名)去承接useLocation()即可使用
  const location = useLocation()
  console.log('location', location)
  return <h1>Home</h1>
}

export default Home
