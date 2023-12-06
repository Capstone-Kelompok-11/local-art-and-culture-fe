import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AdminEvent from './pages/adminEvent/Index'
import Home from "./pages/home"
import NewEvent from './pages/adminEvent/newevent'
import Transaksi from './pages/adminEvent/transaksi'
import MyEvent from './pages/adminEvent/myevent'
import Payout from './pages/adminEvent/payout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<AdminEvent/>} path='/adminevent'/>
        <Route element={<NewEvent/>} path='/newevent'/>
        <Route element ={<Transaksi/>} path='/transaksi'/>
        <Route element={<MyEvent/>} path='/myevent'/>
        <Route element= {<Payout/>} path='/payout'/>
      </Routes>
    </BrowserRouter>
  )
}

export default App