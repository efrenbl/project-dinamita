import React from 'react';

const News = ({ title, content, source }) => (
  // TODO: Get comments on this component
  <article className='news'>
    <header className='news__title'>
      <h1>{title}</h1>
    </header>

    <div className='news__content'>
      <div dangerouslySetInnerHTML={content} />
      <div>
        <p>{`Fuente ${source}`}</p>
      </div>
    </div>
    <aside className='news__comments'>
      <h3>Comentarios</h3>
      <textarea className='news__comments--item'>Deja tu comentario</textarea>
    </aside>
  </article>
);

export default News;
