import React from 'react';
import CarouselItem from '../components/CarouselItem';
import ViewDeportes from '../components/ViewDeportes';

const Deportes = () => (
  <div className='Category'>
    <ViewDeportes>

      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />

    </ViewDeportes>
  </div>

);

export default Deportes;
