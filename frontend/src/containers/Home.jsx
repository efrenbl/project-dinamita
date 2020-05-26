import React from 'react';
import Header from '../components/Header';
import Categories from '../components/Categories';
import CarouselItem from '../components/CarouselItem';

const Home = () => (
  <div className='Home'>
    <Header />
    <Categories>

      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />

    </Categories>
  </div>
);

export default Home;
