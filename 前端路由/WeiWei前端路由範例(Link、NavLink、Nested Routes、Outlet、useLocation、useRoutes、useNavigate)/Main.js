import Header from './pages/Header'
import './Main.css'
import { Routes, Route, useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import Features from './pages/Features'
import ProductLayout from './pages/ProductLayout'
import productsRoutes from './routes/productsRoutes'

function Main() {
  // 定義完客製的Routes後要把他引入進放路由的元件裡，再把他丟useRoutes來做使用，並用自訂變數承接
  // 格式:const 自訂義變數 = useRoutes(引入進來的客製化Routes)
  // const productRouting = useRoutes(productsRoutes)

  // 最後顯示的時候不需要Routes元件(react-router-dom引入的那個)，而是把承接useRoutes的自訂變數直接用{}包起來放到render裡就可以了
  // 但需要注意的一點是BrowserRouter不可以跟useRoutes放在同一個元件裡共用，因此建議把BrowserRouter在往上一層元件丟
  // {自訂義變數}
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* 一般寫法 */}
        {/* <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/features" element={<Features />} /> */}

        {/* 改成巢狀寫法 */}
        <Route path="/products" element={<ProductLayout />}>
          <Route index element={<Products />} />
          <Route path=":id" element={<Product />} />
          <Route path="features" element={<Features />} />
        </Route>

        {/* 路徑如果給*號表示以上的路由都沒有匹配到的話就會進到該路由去，是最後的防錯機制，非常方便 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* 改成用useRoutes */}
      {/* {productRouting} */}
    </>
  )
}

export default Main
//  :id
//  路由常用功能，寫法為:+自定義的參數名，但通常會叫id，ex::id。
//  第一個功能是用於判斷路由，即如果網址後還有參數時，就會進到更下面的子路由，如果沒有則不影響主路由之運作
//  第二個功能是用於傳遞參數給後端，後端可透過抓取此參數來做資料處理
//  參數資料是鍵值對，我們輸入的資料即value，:後的名稱即key
//  注意:id通常是由網址最後往前寫

// useRoutes
// 用於管理數量龐雜的Routes，即客製化Routes，類似把Routes模組化的感覺
