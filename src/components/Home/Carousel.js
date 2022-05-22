import React from 'react'

const Carousel = () => {
  //carrousel de boostrap
  return (
    <div id="carouselExampleControls" class="carousel " data-bs-ride="carousel">
      <div class="carousel-inner">

        <div class="carousel-item active">
          <article className='carrousel'>
            <div>
              <h2>ADEMPAS</h2>
              <small>Cardiopulmonar</small>
            </div>
            <div className="ovalo"></div>
          </article>
        </div>

        <div class="carousel-item">
          <article className='carrousel'>
            <div>
              <h2>IBUPROFENO</h2>
              <small>Inflamación</small>
            </div>
            <div className="ovalo"></div>
          </article>
        </div>

        <div class="carousel-item">
          <article className='carrousel'>
            <div>
              <h2>BENAZEPRIL</h2>
              <small>Cardiaco</small>
            </div>
            <div className="ovalo"></div>
          </article>
        </div>
      </div>

      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
        <button >SIGUIENTE</button>
      </button>
    </div>
  )
}

export default Carousel