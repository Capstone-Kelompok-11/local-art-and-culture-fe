import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AdminEvent from './pages/adminEvent/Index'
import Home from "./pages/home"
import HomeSuperAdmin from './pages/superadmin/dashboard/HomeSuperAdmin'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<HomeSuperAdmin/>} path='/homeSuperAdmin'/>
        <Route element={<AdminEvent/>} path='/adminevent'/>
      </Routes>
    </BrowserRouter>
  )
}

export default App