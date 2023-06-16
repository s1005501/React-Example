// 網路上也可會看到這種寫法，把BrowserRouter給簡寫成Router
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ChildA from './ChildA'
import ChildB from './ChildB'
import NavbarA from './NavbarA'
import NavbarB from './NavbarB'

function Router() {
  // 從外層到內層一定要是BrowserRouter、Routes、Route
  // Route就相當於是node裡面的路由，只不過路徑改寫在path屬性裡，要render的ejs改成component並寫在element屬性裡，element裡使用元件要用大括號包住元件(ex：element={<xxx />})
  // Routes裡只能放Route，其餘元件可以夾在BrowserRouter、Routes之間
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarA />}>
            <Route path=":id" element={<ChildA />} />
          </Route>

          {/* 巢狀路由概念，主要是為了讓不同路由能使用不同的共用元件，且可讀性較好，如此範例的NavbarA、B。
          使用上簡單來說就是在Route裡再包一個Route，外側的Route是主路由(共用元件)，裡面的Route是個別的分頁的感覺(子路由) */}
          <Route path="/NavbarB" element={<NavbarB />}>
            {/* 在react-router-dom裡，可以在Route裡給index屬性來表示是該路由的首頁，較方便 */}
            <Route index element={<ChildB />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router

// cors後端-node
// const express = require('express') // 引入express
// const cors = require('cors') // 引入cors 是middleware
// const app = express() // 建立server

// // 跨來源有使用到session、cookie
// const corsOption = {
//   credentials: true,
//   origin: function (origin, cb) {
//     console.log({ origin }) // 如果不是透過ajax是拿不到origin的
//     cb(null, true)
//   },
// }
// app.use(cors(corsOption))
