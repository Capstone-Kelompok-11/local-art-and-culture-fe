import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AdminEvent from './pages/adminEvent/Index'
import Home from "./pages/home"
import NewEvent from './pages/adminEvent/newevent'
import Transaksi from './pages/adminEvent/transaksi'
import MyEvent from './pages/adminEvent/myevent'
import Payout from './pages/adminEvent/payout'
import Marchandise from './pages/adminEvent/marchandise'
import PengunjungTable from './component/adminEvent/tabelpengunjung'
import TiketTerjualTable from './component/adminEvent/tabelterjual'
import MerchTable from './component/adminEvent/tabelmerch'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<AdminEvent/>} path='/adminevent'/>
        <Route element={<NewEvent/>} path='/adminevent/newevent'/>
        <Route element ={<Transaksi/>} path='/adminevent/transaksi'/>
        <Route element={<MyEvent/>} path='/adminevent/myevent'/>
        <Route element= {<Payout/>} path='/admin/event/payout'/>
        <Route element= {<Marchandise/>} path='/adminevent/marchandise'/>
        <Route element= {<PengunjungTable/>} path='/adminevent/tabelpengunjung'/>
        <Route element= {<TiketTerjualTable/>} path='/adminevent/tabelterjual'/>
        <Route element= {<MerchTable/>} path='/adminevent/tabelmerch'/>
      </Routes>
    </BrowserRouter>
  )
}

export default App