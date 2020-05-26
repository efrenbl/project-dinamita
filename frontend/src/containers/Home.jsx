import React from 'react';
import Categories from '../components/Categories';
import CarouselItem from '../components/CarouselItem';

const Home = () => (
  <div className='Home'>
    <Categories>

      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />

    </Categories>
  </div>
);

export default Home;
