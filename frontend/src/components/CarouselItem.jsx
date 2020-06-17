import React from 'react';
import { Link } from 'react-router-dom';

const CarouselItem = ({ title, content, articleId, category }) => (
  <div className='carousel-item'>
    <img
      className='carousel-item__img'
      src='https://www.esneca.com/wp-content/uploads/robot-programable.jpg'
      alt=''
    />
    <div className='carousel-item__details'>
      <p className='carousel-item__details--title'>{title}</p>
      <p className='carousel-item__details--subtitle'>{content}</p>
      <div className='carousel-item__details--vermas'>
        <Link to={`/${category}/${articleId}`}> Ver más</Link>
      </div>
    </div>
  </div>
);

export default CarouselItem;
