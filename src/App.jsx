import Navbar from "./Components/Navbar";
import Foot from "./Components/Foot";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/pages/home";
import Admin from "./Components/pages/admin";
import AcercaDeNosotros from "./Components/pages/acercaDeNosotros";
import CrearProductos from "./Components/sections/crearProductos";
function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/acercaDeNosotros" element={<AcercaDeNosotros />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/crear-productos" element={<CrearProductos />} />
          </Routes>
        </main>

        <footer>
          <Foot />
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
