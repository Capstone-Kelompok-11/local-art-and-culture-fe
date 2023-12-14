
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AdminEvent from './pages/adminEvent/Index'
import NewEvent from './pages/adminEvent/newevent'
import DraftEvent from './pages/adminEvent/draftevent'
import EditEvent from './pages/adminEvent/editevent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AdminEvent/>} path='/adminevent'/>
        <Route element={<NewEvent/>} path='/adminevent/newevent'/>
        <Route element={<DraftEvent/>} path='/adminevent/draft'/>
        <Route element={<EditEvent/>} path='/adminevent/editevent'/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
