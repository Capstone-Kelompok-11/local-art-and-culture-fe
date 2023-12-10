<<<<<<< HEAD
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AdminEvent from './pages/adminEvent/Index'
import Home from "./pages/home"
import HomeSuperAdmin from './pages/superadmin/dashboard/HomeSuperAdmin'
import DataUser from './pages/superadmin/dataUser/DataUser'
import DaftarAdminEvent from './pages/superadmin/dataUser/DaftarAdminEvent'
import DaftarAdminUmkm from './pages/superadmin/dataUser/DaftarAdminUmkm'
import DaftarPengguna from './pages/superadmin/dataUser/DaftarPengguna'
import VerifikasiAkun from './pages/superadmin/dataUser/VerifikasiAkun'
import SuperAdminArtikel from './pages/superadmin/artikel/index'
import SuperAdminKelolaArtikel from './pages/superadmin/artikel/KelolaArtikel'
import RegisterOrganisasi from './pages/register/organisasi/Index'
import CompleteFormOrganisasi from './pages/register/organisasi/CompleteForm'
import RegisterToko from './pages/register/toko/Index'
import CompleteFormToko from './pages/register/toko/CompleteForm'
import Pengaturan from './pages/superadmin/pengaturan/Pengaturan'

=======
import {BrowserRouter, Routes, Route} from "react-router-dom";
>>>>>>> 68cc50b23989d1375f7b4c2667451092839cf082

import Home from "./pages/home";
import Landing from "./pages/landingpage/index"

function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route element={<Home/>} path='/'/>
        <Route element={<HomeSuperAdmin/>} path='/superadmin/homeSuperAdmin'/>
        <Route element={<DataUser/>} path='/superadmin/dataUser'/>
        <Route element={<DaftarAdminEvent/>} path='/superadmin/daftarAdminEvent'/>
        <Route element={<DaftarAdminUmkm/>} path='/superadmin/daftarAdminUmkm'/>
        <Route element={<DaftarPengguna/>} path='/superadmin/daftarPengguna'/>
        <Route element={<AdminEvent/>} path='/adminevent'/>
        <Route element={<VerifikasiAkun/>} path='/superadmin/verifikasiAkun'/>
        <Route element={<SuperAdminArtikel/>} path='/superadmin/artikel'/>
        <Route element={<SuperAdminKelolaArtikel/>} path='/superadmin/kelolaartikel'/>
        <Route element={<Pengaturan/>} path='/superadmin/pengaturan'/>
        <Route element={<RegisterOrganisasi/>} path='/auth/register/organisasi'/>
        <Route element={<CompleteFormOrganisasi/>} path='/auth/register/organisasi/form'/>
        <Route element={<RegisterToko/>} path='/auth/register/toko'/>
        <Route element={<CompleteFormToko/>} path='/auth/register/toko/form'/>
=======
        <Route element={<Home/>} path="/"/>
        <Route element={<Landing/>} path="/landing"/>
>>>>>>> 68cc50b23989d1375f7b4c2667451092839cf082
      </Routes>
    </BrowserRouter>
  )
}

export default App