import React from 'react';
import arrow from '../assets/static/arrow.svg';
import triangulos from '../assets/static/triangulos.svg';

const CategoriesSection = () => (
  <section className='political'>
    <div className='political__section'>
      <div className='political__section-title'>
        <p>Politica</p>
        <img className='arrow' src={arrow} alt='arrow' />
      </div>
      <div className='political__section-patron'>
        <img className='arrow' src={triangulos} alt='arrow' />

      </div>

    </div>
  </section>

);

export default CategoriesSection;

