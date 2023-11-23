import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/dashboard-admin-umkm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/adminumkm" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
