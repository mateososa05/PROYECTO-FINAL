import React, { useState, useEffect } from 'react';
import { Button, Icon, Image, Container } from 'semantic-ui-react';
import Campera from '../../assets/img/DiseñoCampera.jpg';
import CamperaEspalda from '../../assets/img/DiseñoCamperaEspalda.jpg';
import LaGorda from '../../assets/img/DiseñoLagorda.jpg';
import cincuenta from '../../assets/img/cincuenta.jpg'
import carrousel from '../../assets/img/carrousel.avif'
import sorteo from '../../assets/img/sorteo.jpg'

const images = [
  { label: 'Imagen 1', imgPath: cincuenta },
  { label: 'Imagen 2', imgPath: carrousel },
  { label: 'Imagen 3', imgPath: sorteo },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleBack = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Cambiar automáticamente la imagen cada 3 segundos
  useEffect(() => {
    const intervalId = setInterval(handleNext, 3000); // Cambia cada 3 segundos
    return () => clearInterval(intervalId); // Limpiar el intervalo al desmontar
  }, []);

  return (
    <Container textAlign="center">
      <Image
        src={images[activeIndex].imgPath}
        alt={images[activeIndex].label}
        style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} // Ajustar la imagen
      />
    </Container>
  );
};

export default Carousel;
