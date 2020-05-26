import React from 'react';
import CategoryView from '../components/CategoryView';
import CarouselItem from '../components/CarouselItem';

const Category = () => (
  <div className='Category'>
    <CategoryView>

      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />

    </CategoryView>
  </div>
);

export default Category;
