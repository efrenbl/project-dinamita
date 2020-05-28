import React from 'react';
import SelectCategories from '../components/SelectCategories';
import Categories from '../components/Categories';
import CarouselItem from '../components/CarouselItem';

const Internacional = () => (
  <div className=''>
    <div className=''>
      <SelectCategories />
    </div>
    <Categories>

      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />

    </Categories>

  </div>

);

export default Internacional;
