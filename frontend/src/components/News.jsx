import React from 'react';

const News = ({ title, content, source }) => (
  // TODO: Get comments on this component
  <article className='news'>
    <header className='news__title'>
      <h1>{title}</h1>
    </header>

    <div className='news__content'>
      <div>{content}</div>
      <div>
        <p>{`Fuente ${source}`}</p>
      </div>
    </div>
  </article>
);

export default News;
