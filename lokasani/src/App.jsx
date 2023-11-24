import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AdminEvent from './pages/adminEvent/Index'
import Home from "./pages/home"
import HomeSuperAdmin from './pages/superadmin/dashboard/HomeSuperAdmin'
import DataUser from './pages/superadmin/dataUser/DataUser'
import DaftarAdminEvent from './pages/superadmin/dataUser/DaftarAdminEvent'
import DaftarAdminUmkm from './pages/superadmin/dataUser/DaftarAdminUmkm'
import DaftarPengguna from './pages/superadmin/dataUser/DaftarPengguna'
import SuperAdminArtikel from './pages/superadmin/artikel/index'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<HomeSuperAdmin/>} path='/homeSuperAdmin'/>
        <Route element={<DataUser/>} path='/dataUser'/>
        <Route element={<DaftarAdminEvent/>} path='/daftarAdminEvent'/>
        <Route element={<DaftarAdminUmkm/>} path='/daftarAdminUmkm'/>
        <Route element={<DaftarPengguna/>} path='/daftarPengguna'/>
        <Route element={<AdminEvent/>} path='/adminevent'/>
        <Route element={<SuperAdminArtikel/>} path='/superadmin/artikel'/>
      </Routes>
    </BrowserRouter>
  )
}

export default App