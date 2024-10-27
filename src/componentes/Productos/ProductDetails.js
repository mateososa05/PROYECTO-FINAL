import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Image, Container, Header } from 'semantic-ui-react';
import Campera from '../../assets/img/DiseñoCampera.jpg';
import CamperaEspalda from '../../assets/img/DiseñoCamperaEspalda.jpg';
import LaGorda from '../../assets/img/DiseñoLagorda.jpg';
import PostEspalda from '../../assets/img/DiseñoPostespalda.jpg';
import PostFront from '../../assets/img/DiseñoPostfront.jpg';
import PostPant from '../../assets/img/DiseñoPostpant-2.jpg';

// Datos de los productos
const products = [
  {
    id: 1,
    name: 'Camiseta beis unisex extragrande',
    imgPath: Campera,
    price: '24,99 €',
    description: 'Con estampado de portada de álbum de Green Day',
  },
  {
    id: 2,
    name: 'Camiseta Post Pant',
    imgPath: PostPant,
    price: '24,99 €',
    description: 'Descripción del producto',
  },
  {
    id: 3,
    name: 'Camiseta Post Espalda',
    imgPath: PostEspalda,
    price: '24,99 €',
    description: 'Descripción del producto',
  },
  {
    id: 4,
    name: 'Camiseta Post Front',
    imgPath: PostFront,
    price: '24,99 €',
    description: 'Descripción del producto',
  },
  {
    id: 5,
    name: 'Camiseta Campera Espalda',
    imgPath: CamperaEspalda,
    price: '24,99 €',
    description: 'Descripción del producto',
  },
];

const ProductDetails = ({ onAddToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((prod) => prod.id === parseInt(id, 10));

  if (!product) {
    return <div>No se encontró el producto</div>;
  }

  return (
    <Container id='container-detail' textAlign="center">
      <Header as='h2'>{product.name}</Header>
      <Image className='img-detail' src={product.imgPath} alt={product.name} size='medium' />
      <Header as='h3'>{product.price}</Header>
      <p>{product.description}</p>
      <div className='container-button-detail'>
        <Button className='button-detail' color='green' onClick={() => onAddToCart && onAddToCart(product)}>Añadir al carrito</Button>
        <Button className='button-detail' color='red' onClick={() => navigate(-1)}>Volver atrás</Button>
      </div>

    </Container>
  );
};

export default ProductDetails;
