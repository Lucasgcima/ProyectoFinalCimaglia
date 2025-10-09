import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Category from './components/Category';
import ItemDetailContainer from './components/ItemDetailContainer';
import ReservaForm from './components/ReservaForm';

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda de reservas!" />}
        />
        <Route path="/categoria/:categoriaId" element={<Category />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/reserva" element={<ReservaForm />} />
        <Route path="*" element={<h2 style={{ padding: '1rem' }}>404 - Página no encontrada</h2>} />
        <Route path="/category/:categoryId" element={<Category />} />npm run build
      </Routes>
    </HashRouter>
  );
}

export default App;
