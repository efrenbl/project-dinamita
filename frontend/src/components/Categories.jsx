import React from 'react';

const Categories = ({ children, category }) => (
  <section className='categories'>
    <h2 className='categories__name'>{category}</h2>
    <div className='carousel'>
      <div className='carousel__container'>{children}</div>
    </div>
  </section>
);

export default Categories;
