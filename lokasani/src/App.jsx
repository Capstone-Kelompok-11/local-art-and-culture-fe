import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AdminEvent from './pages/admin_event'
import Home from "./pages/home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<AdminEvent/>} path='/adminevent'/>
      </Routes>
    </BrowserRouter>
  )
}

export default App