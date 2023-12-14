
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AdminEvent from './pages/adminEvent/Index'
import NewEvent from './pages/adminEvent/newevent'
import DraftEvent from './pages/adminEvent/draftevent'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AdminEvent/>} path='/adminevent'/>
        <Route element={<NewEvent/>} path='/newevent'/>
        <Route element={<DraftEvent/>} path='/draft'/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
