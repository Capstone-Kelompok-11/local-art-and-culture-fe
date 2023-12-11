import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AdminEvent from './pages/adminEvent/Index'
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
import DaftarPesananAdmimUMKM from './pages/adminUMKM/DaftarPesanan'
import Pengaturan from './pages/superadmin/pengaturan/Pengaturan'
import Landing from "./pages/landingpage/index"
import Login from "./pages/login"
import React from "react";
import HomeAdminUMKM from "./pages/adminUMKM/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
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
        <Route element={<HomeAdminUMKM />} path="/adminumkm" />
        <Route element={<DaftarPesananAdmimUMKM/>} path='/adminumkm/daftarpesanan'/>
        <Route element={<Login/>} path="/auth/login"/>
        <Route element={<RegisterOrganisasi/>} path='/auth/register/organisasi'/>
        <Route element={<CompleteFormOrganisasi/>} path='/auth/register/organisasi/form'/>
        <Route element={<RegisterToko/>} path='/auth/register/toko'/>
        <Route element={<CompleteFormToko/>} path='/auth/register/toko/form'/>
        <Route element={<Landing/>} path="/"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
