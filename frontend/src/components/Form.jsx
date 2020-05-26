import React from 'react';

const Form = () => (
  <section className='login'>
    <section className='login__container'>
      <h2>Inicia sesión</h2>
      <form className='login__container--form'>
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <div className='password'>
          <a href='/'> Olvidé mi contraseña</a>
        </div>
        <button className='button' type='button'> Iniciar sesión</button>
        <div className='login__container--remember-me'>
          <label>
            <input type='checkbox' id='cbox1' value='first_checkbox' />
            Recuérdame
          </label>
        </div>
        <div className='login__container--register'>
          <a href=''> Si no tienes una cuenta regístrate aquí</a>
        </div>
      </form>
    </section>
  </section>
);

export default Form;
