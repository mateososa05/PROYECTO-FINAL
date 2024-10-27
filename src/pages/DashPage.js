import React, { useRef } from 'react';
import Carrousel from '../componentes/Carrousel/Index';
import Contacto from '../componentes/Contacto/Index';
import Footer from '../componentes/Footer/Index';
import Header from '../componentes/Header/Index';
import Productos from '../componentes/Productos/Index';

function DashPage() {
  const productosRef = useRef(null);
  const contactoRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToProductos = () => {
    productosRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContacto = () => {
    contactoRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Header
        onScrollToProductos={scrollToProductos}
        onScrollToGaleria={scrollToFooter}
        onScrollToContacto={scrollToContacto}
      />
      <Carrousel />
      <div ref={productosRef}>
        <Productos />
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
      <div ref={contactoRef}>
        <Contacto />
      </div>
    </div>
  );
}

export default DashPage;