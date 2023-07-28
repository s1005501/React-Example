import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <nav>
      <span>
        {/* replace
        在Link加上replace屬性，可以清掉連覽紀錄的資料(history)，也就是說返回上一頁會失效，會直接跳到進到該路由、網頁前的頁面裡 */}

        {/* state
        link也可傳資料進去(但通常簡易的資料傳送方式是透過query string)，透過state屬性(只能叫state，亂取會抓不到值)，資料會存在location裡 */}
        <Link to="/" replace state={{ name: 'Kevin' }}>
          Home{' '}
        </Link>
      </span>
      |
      <span>
        {/* NavLink功能基本上跟Link一樣，差別在於NavLink可以判斷使用者當前是在哪一個路由下，判斷依據是透過isActive這個屬性
        isActive的功能用來協助做判斷 */}
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? 'active' : null)}
        >
          {' '}
          Products
        </NavLink>
      </span>
    </nav>
  )
}

export default Header
