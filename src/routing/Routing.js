import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import DashPage from '../pages/DashPage';
import ProductDetails from '../componentes/Productos/ProductDetails';
import Cart from '../pages/Cart'; // Importa el componente Cart

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dash" element={<DashPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/carrito" element={<Cart />} /> {/* Nueva ruta para el carrito */}
      </Routes>
    </Router>
  );
}

export default Routing;