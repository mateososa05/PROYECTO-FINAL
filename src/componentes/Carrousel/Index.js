import React from 'react'
import Campera from '../../assets/img/DiseñoCampera.jpg'
import CamperaEspalda from '../../assets/img/DiseñoCamperaEspalda.jpg'
import LaGorda from '../../assets/img/DiseñoLagorda.jpg'
import PostEspalda from '../../assets/img/DiseñoPostespalda.jpg'
import PostFront from '../../assets/img/DiseñoPostfront.jpg'
import PostPant from '../../assets/img/DiseñoPostpant-2.jpg'

const Carrousel = () => {
  return (
    <div>
      <button className="next" onclick="moveSlide(1)">&#10095;</button>
      <div class="carousel">
        <div className="carousel-container">
            <div className="carousel-slide">
            <img className='imagenCarrousel' src={Campera} />
                
            </div>
            <div className="carousel-slide">

            <img className='imagenCarrousel' src={LaGorda} />

            </div>
            <div className="carousel-slide">
            <img className='imagenCarrousel' src={PostPant} />
            </div>
        </div>
        <button className="prev" onclick="moveSlide(-1)">&#10094;</button>
        
    </div>
    </div>
  )
}

export default Carrousel
