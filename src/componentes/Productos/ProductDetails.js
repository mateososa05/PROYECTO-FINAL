import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Image, Container, Header } from 'semantic-ui-react';
import { CartContext } from '../../context/CartContext';  
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
    name: 'buzo pro',
    imgPath: Campera,
    price: '36.000,99 €',
    description: 'buzo negro con estampa violeta de algodon peinado calidad premium',
  },
  {
    id: 2,
    name: 'Post Pant',
    imgPath: PostPant,
    price: '24.000,99 €',
    description: 'short negro estampa violeta 3 de algodon extra premium',
  },
  {
    id: 3,
    name: 'buzo pro Post Espalda',
    imgPath: PostEspalda,
    price: '50.000,99 €',
    description: 'buzo estampa blanca de algodon peinado calidad premium',
  },
  {
    id: 4,
    name: 'bbuzo pro Post Front',
    imgPath: PostFront,
    price: '36.000,99 €',
    description: 'buzo negro con estampa violeta de algodon peinado calidad premium',
  },
  {
    id: 5,
    name: 'buzo pro estampa espalda',
    imgPath: CamperaEspalda,
    price: '24.000,99 €',
    description: 'Camiseta beis unisex extragrande con estampado de portada de álbum de Green Day',
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);  
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
        <Button
          className='button-detail'
          color='green'
          onClick={() => addToCart(product)}  
        >
          Añadir al carrito
        </Button>
        <Button className='button-detail' color='red' onClick={() => navigate(-1)}>
          Volver atrás
        </Button>
      </div>
    </Container>
  );
};

export default ProductDetails;
