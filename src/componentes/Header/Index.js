import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const Header = ({ onScrollToProductos, onScrollToGaleria, onScrollToContacto }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { cart } = useContext(CartContext);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header>
      <nav className='navbar'>
        <div className='hamburger' onClick={toggleDropdown}>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>

        <ul className={`nav-links ${isDropdownOpen ? 'active' : ''}`}>
          <li><a href="#" onClick={onScrollToProductos}>Prendas</a></li>
          <li><a href="#" onClick={onScrollToGaleria}>Hablemos</a></li>
          <li><a href="#" onClick={onScrollToContacto}>Contacto</a></li>
          <li>
            <Link to="/carrito">
              Carrito ({cart.length})
            </Link>
          </li>
        </ul>

        <div className='logo'>
        
        </div>
      </nav>

      {isDropdownOpen && (
        <div className='dropdown-menu'>
          <ul>
            <li><a href="#" onClick={onScrollToProductos}>Prendas</a></li>
            <li><a href="#" onClick={onScrollToGaleria}>Galería</a></li>
            <li><a href="#" onClick={onScrollToContacto}>Contacto</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
