import React from 'react';

const Header = () => (

  <header className='header'>
    <p>logo</p>
    <div className='header__menu'>
      <ul className='header__menu-items'>
        <li className='header__menu-items--item'>
          <a href='#'>Acerca de </a>
          {' '}
        </li>
        <li className='header__menu-items--item loguin'>
          {' '}
          <a href='#'>Iniciar sesión </a>
        </li>
      </ul>
    </div>
  </header>

);

export default Header;
