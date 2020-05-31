import React from 'react';
import { Link } from 'react-router-dom';
import more from '../assets/static/more.svg';

const CarouselItemMore = ({ path }) => (
  <div className='carousel-item'>
    <Link to={path}>
      <img className='carousel-more' src={more} alt='' />
    </Link>
  </div>
);

export default CarouselItemMore;