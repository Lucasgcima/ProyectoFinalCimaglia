import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Category from './components/Category';
import ReservaForm from './components/ReservaForm';
import Checkout from "./components/Checkout";

function App() {
  return (
    <HashRouter>
      <NavBar />
      <ItemListContainer />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda de reservas!" />} />
        <Route path="/categoria/:categoriaId" element={<Category />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/reserva" element={<ReservaForm />} />
        <Route path="*" element={<h2 style={{ padding: '1rem' }}>404 - Página no encontrada</h2>} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
