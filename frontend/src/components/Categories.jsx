import React from 'react';
import CarouselItem from './CarouselItem';
import CarouselItemMore from './CarouselItemMore';

const Categories = ({ category = 'Categoría', articles = [] }) => (
  <section className='categories'>
    <div className='carousel'>
      <div className='categories__container'>
        <h2 className='categories__name'>
          {category}
        </h2>
      </div>
      <div className='carousel__container'>
        <div className='carousel'>
          <div className='carousel__container'>
            {articles.map((article) => (
              <CarouselItem article={article} />
            ))}
            <CarouselItemMore />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Categories;
