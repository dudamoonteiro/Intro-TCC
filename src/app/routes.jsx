import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "/Login";
import Avisos from "./pages/Avisos";
// Importe suas outras telas aqui...

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/avisos" element={<Avisos />} />
        {/* Adicione as outras telas aqui */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
