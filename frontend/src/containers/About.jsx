
import React from 'react';
import arrow from '../assets/static/arrow.svg';
import triangulos2 from '../assets/static/triangulos2.svg';
import platzimaster from '../assets/static/platzi-master.jpg';
import silvia from '../assets/static/silvia.jpg';
import efren from '../assets/static/efren.jpg';
import claudia from '../assets/static/claudia.jpg';
import berenice from '../assets/static/berenice.jpg';
import github from '../assets/static/github.svg';
import linkedin from '../assets/static/linkedin.svg';

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
        <img src={platzimaster} alt='arrow' />
        <p className='container__about-info'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem quam ipsam voluptatum, asperiores neque, repellendus ratione inventore ut dolore praesentium architecto sed nulla minus numquam! Hic reiciendis itaque nisi debitis?</p>

      </div>

    </div>
    <div className='team'>
      <h1>Nosotros</h1>
      <div className='team__items'>

        {/* silvia */}
        <div className='team__items--item'>
          <img className='team__items--item-photo' src={silvia} alt='arrow' />
          <h3>Silvia Orduña</h3>
          <p>DevOps</p>
          <p>Algo bonito sobre mi</p>
          <div>
            <a href='#'><img src={github} alt='arrow' /></a>
            <a href='#'><img src={linkedin} alt='arrow' /></a>
          </div>

        </div>
        {/* Efren */}
        <div className='team__items--item'>
          <img className='team__items--item-photo' src={efren} alt='arrow' />
          <h3>Efrén Bautista</h3>
          <p>Backend</p>
          <p>Algo bonito sobre mi</p>
          <a href='#'><img src={github} alt='arrow' /></a>
          <a href='#'><img src={linkedin} alt='arrow' /></a>
        </div>
        {/* Claudia */}
        <div className='team__items--item'>
          <img className='team__items--item-photo' src={claudia} alt='arrow' />
          <h3>Claudia Salgado</h3>
          <p>Frontend</p>
          <p>Algo bonito sobre mi</p>
          <a href='#'><img src={github} alt='arrow' /></a>
          <a href='#'><img src={linkedin} alt='arrow' /></a>
        </div>
        {/* Berenice */}
        <div className='team__items--item'>
          <img src={berenice} alt='arrow' className='team__items--item-photo' />
          <h3>Berenice Soto</h3>
          <p>Data Science</p>
          <p>Algo bonito sobre mi</p>
          <a href='#'><img src={github} alt='arrow' /></a>
          <a href='#'><img src={linkedin} alt='arrow' /></a>
        </div>
      </div>
    </div>
  </section>

);

export default About;
