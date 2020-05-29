import React from 'react';
import CarouselItem from '../components/CarouselItem';
import ViewEspectaculos from '../components/ViewEspectaculos';

const Espectaculos = () => (
  <div className='Category'>
    <ViewEspectaculos>

      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />

    </ViewEspectaculos>
  </div>

);

export default Espectaculos;
