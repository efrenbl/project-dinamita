import React from 'react';

const Categories = ({ children, category }) => (
  <section>
    <div className='categories'>
      <section className='carousel'>
        <section className='categories__container'>
          <h2 className='categories__name'>
            {category}
          </h2>
        </section>
        <div className='carousel__container'>
          <section className='carousel'>
            <div className='carousel__container'>
              {children}
            </div>
          </section>
        </div>
      </section>
    </div>
  </section>
);

export default Categories;
