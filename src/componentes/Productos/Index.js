import React from 'react'
import Campera from '../../assets/img/DiseñoCampera.jpg'
import CamperaEspalda from '../../assets/img/DiseñoCamperaEspalda.jpg'
import LaGorda from '../../assets/img/DiseñoLagorda.jpg'
import PostEspalda from '../../assets/img/DiseñoPostespalda.jpg'
import PostFront from '../../assets/img/DiseñoPostfront.jpg'
import PostPant from '../../assets/img/DiseñoPostpant-2.jpg'

const ProductosLista = () => {
  return (

    <div className='product-gallery'>
      
      <div className='product-card'>
            <div className='image-container'>
                <img className='imagenProducto' src={Campera} />
                <button className='btn-cart'>
                añadir al carrito
                </button>
            </div>
            <div className='product-info'>
                <p className='description'>Camiseta beis unisex extragrande con estampado de portada de álbum de Green Day</p>
                <img className='imagenProducto' src={LaGorda} />
                <button className='btn-arrasando'>24,99 €</button>
            </div>
        </div>
        <div className='product-card'>
            <div className='image-container'>
                <img className='imagenProducto' src={PostPant} />
                <button className='btn-cart'>
                añadir al carrito
                </button>
            </div>
            <div className='product-info'>
                <p className='description'>Camiseta beis unisex extragrande con estampado de portada de álbum de Green Day</p>
                <img className='imagenProducto' src={Campera} />
                <button className='btn-arrasando'>24,99 €</button>
            </div>
        </div>
        <div className='product-card'>
            <div className='image-container'>
                <img className='imagenProducto' src={PostEspalda} />
                <button className='btn-cart'>
                añadir al carrito
                </button>
            </div>
            <div className='product-info'>
                <p className='description'>Camiseta beis unisex extragrande con estampado de portada de álbum de Green Day</p>
                <img className='imagenProducto' src={Campera} />
                <button className='btn-arrasando'>24,99 €</button>
            </div>
        </div>
        <div className='product-card'>
            <div className='image-container'>
                <img className='imagenProducto' src={PostFront} />
                <button className='btn-cart'>
                añadir al carrito
                </button>
            </div>
            <div className='product-info'>
                <p className='description'>Camiseta beis unisex extragrande con estampado de portada de álbum de Green Day</p>
                <img className='imagenProducto' src={Campera} />
                <button className='btn-arrasando'>24,99 €</button>
            </div>
        </div>
        <div className='product-card'>
            <div className='image-container'>
                <img className='imagenProducto' src={CamperaEspalda} />
                <button className='btn-cart'>
                añadir al carrito
                </button>
            </div>
            <div className='product-info'>
                <p className='description'>Camiseta beis unisex extragrande con estampado de portada de álbum de Green Day</p>
                <img className='imagenProducto' src={Campera} />
                <button className='btn-arrasando'>24,99 €</button>
            </div>
        </div>
        
    </div>
    //------fin de galeria de ropa--------
  )
}

export default ProductosLista
