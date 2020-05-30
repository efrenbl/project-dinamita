import React from 'react';

const Categories = ({ children }) => (
  <section>
    <div className='categories'>
      <section className='carousel'>
        <section className='categories__container'>
          <h2 className='categories__name'> Internacional </h2>
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

    <div className='categories'>
      <section className='carousel'>
        <section className='categories__container'>
          <h2 className='categories__name'> Nacional </h2>
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

    <div className='categories'>
      <section className='carousel'>
        <section className='categories__container'>
          <h2 className='categories__name'> Deportes </h2>
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

    <div className='categories'>
      <section className='carousel'>
        <section className='categories__container'>
          <h2 className='categories__name'> Política </h2>
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

    <div className='categories'>
      <section className='carousel'>
        <section className='categories__container'>
          <h2 className='categories__name'> Finanzas </h2>
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
