import React from 'react';
import { Link } from 'react-router-dom';

const SelectCategories = () => (

  <div className='select'>
    <ul className='select__items'>
      <li>
        <Link to='/' className='select__items--item'>Nacional</Link>
      </li>
      <li>
        <Link to='/about' className='select__items--item'>Internacional</Link>
      </li>
      <li>
        <Link to='/about' className='select__items--item'>Espectaculos</Link>
      </li>
      <li>
        <Link to='/about' className='select__items--item'>Deportes</Link>
      </li>
    </ul>
  </div>

);

export default SelectCategories;
