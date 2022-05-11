import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ModulePage from "./pages/ModulePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/modules" element={<ModulePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
