import React from 'react';
import platzimaster from '../assets/static/platzi-master.jpg';

const MasterAbout = () => (
  <div className='about'>
    <div className='head__section'>
      <div>
        <h2 className='category__name'> Acerca de </h2>
      </div>
    </div>
    <div className='container__about'>
      <div className='container__about-master'>
        <img src={platzimaster} alt='arrow' />
        <p className='container__about-info'>
          Platzi Master es un programa que cada mes elige a sus 100 mejores
          estudiantes para invitarlos a un programa personalizado que
          incluye entrenamiento técnico, preparación para los mejores empleos
          en la industria y 3 años de acceso a una red de mentores y cursos
          de Platzi.
          Notibot es un proyecto que surge dentro de este programa, en él mostramos las noticias más importantes de periódicos de América Latina.
        </p>

      </div>

    </div>

  </div>

);

export default MasterAbout;
