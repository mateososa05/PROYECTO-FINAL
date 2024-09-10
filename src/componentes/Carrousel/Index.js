import React from 'react'

const Carrousel = () => {
  return (
    <div>
      <div class="carousel">
        <div className="carousel-container">
            <div className="carousel-slide">

                //----colocar foto importada------

            </div>
            <div className="carousel-slide">

                //----colocar foto importada------

            </div>
            <div className="carousel-slide">
                //----colocar foto importada------
            </div>
        </div>
        <button className="prev" onclick="moveSlide(-1)">&#10094;</button>
        <button className="next" onclick="moveSlide(1)">&#10095;</button>
    </div>
    </div>
  )
}

export default Carrousel
