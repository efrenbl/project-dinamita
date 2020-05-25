import React from 'react';
import FotoNoticia from '../assets/static/FotoNoticia.jpeg';

const Cards = () => (
  <div className='Cards'>
    <ul className='cards__items'>
      <li><a href='#' className='Cards__items-item'>Fecha de la noticia</a></li>
      <li><a href='#' className='Cards__items-item'> Periódico</a></li>
    </ul>
    <img className='FotoNoticia' src={FotoNoticia} alt='FotoNoticia' />
    <img className='VerMas' src={FotoNoticia} alt='VerMas' />
  </div>
);

export default Cards;
