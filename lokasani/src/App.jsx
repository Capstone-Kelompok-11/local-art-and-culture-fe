import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/home";
import Landing from "./pages/landingpage/index"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Landing/>} path="/landing"/>
      </Routes>
    </BrowserRouter>
  )
}

export default App