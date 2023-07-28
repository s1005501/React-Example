import { Link, Outlet } from 'react-router-dom'

function ProductLayout() {
  return (
    <>
      <nav>
        {/* 底下的link會連到Product Components */}
        <span>
          <Link to="/products/1">Products 1</Link>
        </span>
        |
        <span>
          <Link to="/products/2">Products 2</Link>
        </span>
        |
        <span>
          <Link to="/products/2">Products 2</Link>
        </span>
        |
        <span>
          <Link to="/products/features">Products Features</Link>
        </span>
      </nav>
      <Outlet context={{ name: 'Kevin' }} />
    </>
  )
}

export default ProductLayout
