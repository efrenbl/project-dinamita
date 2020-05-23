import React from 'react';
import arrow from '../assets/static/arrow.svg';
import triangulos2 from '../assets/static/triangulos2.svg';

const NoticeOfPrivacy = () => (
  <section className='head'>
    <div className='head__section'>
      <div className='head__section-title'>
        <p>Aviso de privasidad</p>
        <img className='arrow' src={arrow} alt='arrow' />
      </div>
      <div className='head__section-patron'>
        <img className='arrow' src={triangulos2} alt='arrow' />
      </div>
    </div>
    <div className='privacy'>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quis voluptatum corrupti distinctio necessitatibus rem obcaecati mollitia. Soluta, aliquid asperiores. Voluptates facere incidunt reiciendis voluptatibus

        inventore quas cumque, veniam aut?Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quis voluptatum corrupti distinctio necessitatibus rem obcaecati mollitia. Soluta, aliquid asperiores. Voluptates facere incidunt reiciendis voluptatibus

        inventore quas cumque, veniam aut?
      </p>
      pLorem ipsum dolor sit amet consectetur adipisicing elit. Atque quis voluptatum corrupti distinctio necessitatibus rem obcaecati mollitia. Soluta, aliquid asperiores. Voluptates facere incidunt reiciendis voluptatibus

      inventore quas cumque, veniam aut?
    </div>
  </section>
);

export default NoticeOfPrivacy;
