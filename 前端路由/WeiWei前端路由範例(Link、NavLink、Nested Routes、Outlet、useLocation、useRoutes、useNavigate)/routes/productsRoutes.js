import Features from '../pages/Features'
import Product from '../pages/Product'
import ProductLayout from '../pages/ProductLayout'
import Products from '../pages/Products'

// useRoutes
// 先定義Routes結構，建議在實際使用上可以再建一個routes資料夾來存放自定義的Routes，有需要用到時再引入即可
// 注意，自訂義Routes最外面直接接陣列，內層再給一個物件
// 外層的物件放的是主路由的path、element屬性
// 子路由要放在children屬性裡，一樣用陣列包起來，寫法跟外層一樣

// 自訂義Routes格式大概如下
// const 自訂義Routes名稱 = [
//   {
//     path: '主路由路徑',
//     element: <主路由元件 />,
//     children: [
//       { path: '子路由路徑1', element: <子路由元件1 /> },
//       { path: '子路由路徑2', element: <子路由元件2 /> },
//     ],
//   },
// ]

const productsRoutes = [
  {
    path: '/products',
    element: <ProductLayout />,
    children: [
      // path給空值即首頁index
      { path: '', element: <Products /> },
      { path: ':id', element: <Product /> },
      { path: 'features', element: <Features /> },
    ],
  },
]

export default productsRoutes
