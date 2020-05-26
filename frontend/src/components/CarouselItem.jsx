import React from 'react';

const CarouselItem = () => (
  <div className="carousel-item">
    <img className="carousel-item__img" src="https://www.esneca.com/wp-content/uploads/robot-programable.jpg" alt="" />
    <div className="carousel-item__details">
      <p className="carousel-item__details--title">Título </p>
      <p className="carousel-item__details--subtitle">Noticia</p>
      <div className='carousel-item__details--vermas'>
        <a href='/'> Ver más</a>
      </div>
    </div>
  </div>
);

export default CarouselItem;

