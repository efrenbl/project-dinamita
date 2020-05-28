import React from 'react';

const CategoryView = ({ children }) => (
  <section>
    <div className='category'>
      <section className='carousel'>
        <section className='category__container'>
          <h2 className='category__name'> Internacional </h2>
        </section>
        <div className='category__carousel-container'>
          <section className='carousel'>
            <div className='category__carousel-container'>
              {children}
            </div>
          </section>
          <section className='carousel'>
            <div className='category__carousel-container'>
              {children}
            </div>
          </section>
          <section className='carousel'>
            <div className='category__carousel-container'>
              {children}
            </div>
          </section>
          <section className='carousel'>
            <div className='category__carousel-container'>
              {children}
            </div>
          </section>
          <section className='carousel'>
            <div className='category__carousel-container'>
              {children}
            </div>
          </section>
        </div>
      </section>
    </div>

  </section>
);

export default CategoryView;
