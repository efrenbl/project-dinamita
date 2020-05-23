import React from 'react';
import arrow from '../assets/static/arrow.svg';
import triangulos2 from '../assets/static/triangulos2.svg';

const CategoriesSection = () => (
  <section className='head'>
    <div className='head__section'>
      <div className='head__section-title'>
        <p>Politica</p>
        <img className='arrow' src={arrow} alt='arrow' />
      </div>
      <div className='head__section-patron'>
        <img className='arrow' src={triangulos2} alt='arrow' />

      </div>

    </div>
  </section>

);

export default CategoriesSection;

