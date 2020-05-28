import React from 'react';
import silvia from '../assets/static/silvia.jpg';
import efren from '../assets/static/efren.jpg';
import claudia from '../assets/static/claudia.jpg';
import berenice from '../assets/static/berenice.jpg';
import github from '../assets/static/github.svg';
import linkedin from '../assets/static/linkedin.svg';

const TeamAbout = () => (

  <div>
    <div className='about__head'>
      <h2 className='about__head--name'>Nosotros</h2>
      <div className='team__items'>

        {/* silvia */}
        <div className='team__items--item'>
          <img className='team__items--item-photo' src={silvia} alt='arrow' />
          <h3>Silvia Orduña</h3>
          <p>DevOps</p>
          <p>Algo bonito sobre mi</p>
          <div className='team__items--icons'>
            <a href='https://github.com/SilviaAlarcon' target='_blank'><img src={github} alt='arrow' /></a>
            <a href='#' target='_blank'><img src={linkedin} alt='arrow' /></a>
          </div>

        </div>
        {/* Efren */}
        <div className='team__items--item'>
          <img className='team__items--item-photo' src={efren} alt='arrow' />
          <h3>Efrén Bautista</h3>
          <p>Backend</p>
          <p>Algo bonito sobre mi</p>
          <div className='team__items--icons'>
            <a href='https://github.com/efrenbl' target='_blank'><img src={github} alt='arrow' /></a>
            <a href='https://www.linkedin.com/in/efrenbl/' target='_blank'><img src={linkedin} alt='arrow' /></a>

          </div>

        </div>
        {/* Claudia */}
        <div className='team__items--item'>
          <img className='team__items--item-photo' src={claudia} alt='arrow' />
          <h3>Claudia Salgado</h3>
          <p>Frontend</p>
          <p>Algo bonito sobre mi</p>
          <div className='team__items--icons'>
            <a href='https://github.com/claudiagonal' target='_blank'><img src={github} alt='arrow' /></a>
            <a href='https://www.linkedin.com/in/clausalgado/' target='_blank'><img src={linkedin} alt='arrow' /></a>

          </div>

        </div>
        {/* Berenice */}
        <div className='team__items--item'>
          <img className='team__items--item-photo' src={berenice} alt='arrow' />
          <h3>Berenice Soto</h3>
          <p>Data Science</p>
          <p>Algo bonito sobre mi</p>
          <div className='team__items--icons'>
            <a href='https://github.com/BereSoto' target='_blank'><img src={github} alt='arrow' /></a>
            <a href='https://www.linkedin.com/in/montserrat-berenice-soto-ferm%C3%ADn-07aa13109/' target='_blank'><img src={linkedin} alt='arrow' /></a>

          </div>

        </div>
      </div>
    </div>

  </div>

);

export default TeamAbout;
