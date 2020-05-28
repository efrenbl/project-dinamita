import React from 'react';

const RegisterForm = () => (
  <section className='register'>
    <section className='register__container'>
      <h2>Crear cuenta</h2>
      <form className='register__container--form'>
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <input className='input' type='password' placeholder='Confirmar contraseña' />
        <button className='button' type='button'> Registrarse </button>
      </form>
      <div className='register__container--login'>
        <a href=''> Inicia sesión </a>
      </div>
    </section>
  </section>
);

export default RegisterForm;
