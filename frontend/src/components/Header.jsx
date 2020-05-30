import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/static/logo.png';

const Header = () => (

  <header className='header'>
    <div>
      <Link to='/'>
        <img className='logo' src={logo} alt='arrow' />
      </Link>
    </div>

    <div className='header__menu'>
      <ul className='header__menu-items'>
        <li className='header__menu-items--item'>
          Categorías
          <ul className="submenu">
            <li><Link to='/internacional'>Internacional</Link></li>
            <li><Link to='/nacional'>Nacional</Link></li>
            <li><Link to='/deportes'>Deportes</Link></li>
            <li><Link to='/espectaculos'>Espectaculos</Link></li>
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
