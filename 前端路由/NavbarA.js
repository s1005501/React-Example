import { Link, Outlet } from 'react-router-dom'

// A用Link，B用useNavigate
function NavbarA() {
  // 在react-router-dom裡a標籤要改成Link。href屬性要改成to，其值原地刷新的#要成/

  return (
    <>
      <h1>我是NavbarA</h1>
      <div>
        <p>現在在A路由</p>
        <button>
          <Link to="/NavbarB">切換到B路由</Link>
        </button>
      </div>
      <Outlet />
    </>
  )
}

export default NavbarA
