import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Login/>} path="/auth/login"/>
      </Routes>
    </BrowserRouter>
  )
}

export default App