import { useNavigate } from 'react-router-dom'

// useNavigate很方便，可以搭配setTimeout、useEffect來做延時跳轉
function Products() {
  const navigate = useNavigate()
  return (
    <>
      <h1>Products</h1>
      <button
        onClick={() => {
          navigate('/')
        }}
      >
        Click
      </button>
    </>
  )
}

export default Products
