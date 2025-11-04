import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import DeletarCategoria from "./components/Categoria/deletarCategoria/DeletarCategoria";
import Home from "./pages/Home/home";
import ListarCategorias from "./components/Categoria/listacategorias/ListaCategorias";
import FormCategoria from "./components/Categoria/formCategoria/FormCategoria";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/Categorias" element={<ListarCategorias />} />
            <Route path="/cadastrarcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route
              path="/deletarCategoria/:id"
              element={<DeletarCategoria />}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
