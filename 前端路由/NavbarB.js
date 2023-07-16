// 使用時要先從react-router-dom import進來
import { useNavigate, Outlet } from 'react-router-dom'

// A用Link，B用useNavigate
function NavbarB() {
  // useNavigate是react-router-dom裡面的function，用於處理跳頁
  // 有使用到useNavigate的元件要放在RouterBrowser裡
  // 建議跟useContext搭配使用，useNavigate就可以透過context往子元件傳

  // 再在component的function裡使用
  const navigate = useNavigate()
  return (
    <>
      <h1>我是NavbarB</h1>
      <div>
        <p>現在在B路由</p>
        <button
          onClick={() => {
            // 真的要跳頁時直接在( )內寫入要跳頁的路徑即可
            navigate('/')
          }}
        >
          切換到A路由
        </button>
      </div>
      {/* Outlet也可以傳遞資料下去，有點類似props、useContext。是透過context屬性，匹配到的子路由底下的元件要使用時要透過useOutletContext */}
      <Outlet context={{ name: 'Kevin' }} />
    </>
  )
}

export default NavbarB
