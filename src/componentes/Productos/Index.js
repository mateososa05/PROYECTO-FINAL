import React from 'react';
import { Link } from 'react-router-dom';
import Campera from '../../assets/img/DiseñoCampera.jpg';
import CamperaEspalda from '../../assets/img/DiseñoCamperaEspalda.jpg';
import LaGorda from '../../assets/img/DiseñoLagorda.jpg';
import PostEspalda from '../../assets/img/DiseñoPostespalda.jpg';
import PostFront from '../../assets/img/DiseñoPostfront.jpg';
import PostPant from '../../assets/img/DiseñoPostpant-2.jpg';

const products = [
  {
    id: 1,
    image: Campera,
    description: 'Camiseta beis unisex extragrande con estampado de portada de álbum de Green Day',
    price: '24,99 €'
  },
  {
    id: 2,
    image: PostPant,
    description: 'Camiseta beis unisex extragrande con estampado de portada de álbum de Green Day',
    price: '24,99 €'
  },
  {
    id: 3,
    image: PostEspalda,
    description: 'Camiseta beis unisex extragrande con estampado de portada de álbum de Green Day',
    price: '24,99 €'
  },
  {
    id: 4,
    image: PostFront,
    description: 'Camiseta beis unisex extragrande con estampado de portada de álbum de Green Day',
    price: '24,99 €'
  },
  {
    id: 5,
    image: CamperaEspalda,
    description: 'Camiseta beis unisex extragrande con estampado de portada de álbum de Green Day',
    price: '24,99 €'
  }
];

const ProductosLista = () => {
  return (
    <div className='product-gallery'>
      {products.map((product) => (
        <div className='product-card' key={product.id}>
          <Link to={`/product/${product.id}`}>
            <div className='image-container'>
              <img className='imagenProducto' src={product.image} alt={product.description} />

            </div>
          </Link>
          <div className='product-info'>
            <p className='description'>{product.description}</p>

          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductosLista;
