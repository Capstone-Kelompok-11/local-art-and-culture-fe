import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AdminEvent from './pages/adminEvent/Index'
import Home from "./pages/home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<HomeSuperAdmin/>} path='/superadmin/homeSuperAdmin'/>
        <Route element={<DataUser/>} path='/superadmin/dataUser'/>
        <Route element={<DaftarAdminEvent/>} path='/superadmin/daftarAdminEvent'/>
        <Route element={<DaftarAdminUmkm/>} path='/superadmin/daftarAdminUmkm'/>
        <Route element={<DaftarPengguna/>} path='/superadmin/daftarPengguna'/>
        <Route element={<AdminEvent/>} path='/adminevent'/>
      </Routes>
    </BrowserRouter>
  )
}

export default App