import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (

  <header className='header'>
    <div>
      <p>logo</p>
    </div>

    <div className='header__menu'>
      <ul className='header__menu-items'>
        <li className='header__menu-items--item'>
          Categorías
          
          <ul className="submenu">
      <li><a href="#">Internacional</a></li>
      <li><a href="#">Nacional</a></li>
      <li><a href="#">Deportes</a></li>
      <li><a href="#">Política</a></li>
        </ul>

        </li>
        <li className='header__menu-items--item'>
          <Link to='/about'>Acerca de</Link>

        </li>
        <li className='header__menu-items--item login'>

          <Link to='/login'>Iniciar sesión</Link>
        </li>
      </ul>
    </div>
  </header>

);

export default Header;
