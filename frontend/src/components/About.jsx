
import React from 'react';
import arrow from '../assets/static/arrow.svg';
import triangulos2 from '../assets/static/triangulos2.svg';
import master from '../assets/static/master.png';

const About = () => (
  <section>
    <div className='head__section'>
      <div className='head__section-title'>
        <p>Acerca de </p>
        <img className='arrow' src={arrow} alt='arrow' />
      </div>
      <div className='head__section-patron'>
        <img className='arrow' src={triangulos2} alt='arrow' />
      </div>
    </div>
    <div className='container__about'>
      <div className='container__about-master'>
        <img src={master} alt='arrow' />
        <p className='container__about-info'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem quam ipsam voluptatum, asperiores neque, repellendus ratione inventore ut dolore praesentium architecto sed nulla minus numquam! Hic reiciendis itaque nisi debitis?</p>

      </div>

    </div>
  </section>

);

export default About;
