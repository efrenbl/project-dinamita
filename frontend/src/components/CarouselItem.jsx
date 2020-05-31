import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Renderiza un item del carousel
 * @param {{article: import('../../types').Article}} param0 
 */
const CarouselItem = ({ article }) => {
  if (article) {
    return (
      <div className='carousel-item'>
        <img className='carousel-item__img' src='https://www.esneca.com/wp-content/uploads/robot-programable.jpg' alt='' />
        <div className='carousel-item__details'>
          <p className='carousel-item__details--title'>
            {article.title}
          </p>
          <p className='carousel-item__details--subtitle'>{article.category}</p>
          <div className='carousel-item__details--vermas'>
            <Link to={`/content/${article.id}`}> Ver más</Link>
          </div>
        </div>
      </div>
    );
  }
};

export default CarouselItem;

