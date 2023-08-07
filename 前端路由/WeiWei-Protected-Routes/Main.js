import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Home from './pages/Home'
import Accounts from './pages/Accounts'
import Dashboard from './pages/Dashboard'
import './Main.css'
function Main() {
  const user = { login: false }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* account、dashboard使用者要先登入才能看到頁面 */}
        <Route path="/account" element={<Accounts />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Main
