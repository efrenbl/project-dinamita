import React from 'react';

const Categories = ({ children, category }) => (
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
            {children}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Categories;
