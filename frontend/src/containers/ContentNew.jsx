import React from 'react';
import News from '../components/News';
import useFetchState from '../hooks/useFetchState';
import { client } from '../client';

const ContentNews = ({ match }) => {
  const { id } = match.params;
  /** @type {Readonly<import('../../types').ArticleWithComments>} */
  const defaultArticleStub = Object.freeze({
    id: 0,
    title: '',
    content: '',
    category: '',
    url: '',
    source: '',
    publication_date: new Date(),
    comments: [],
  });
  const { result, state } = useFetchState(
    () => client.getArticleById(id),
    defaultArticleStub,
  );
  switch (state) {
    case 'error':
      return <div>Hubo un error al solicitar este artículo</div>;
    case 'idle':
      return <div>Esperando para solicitar el artículo</div>;
    case 'loading':
      return <div>Cargando...</div>;
    case 'resolved':
      return (
        <div>
          <main>
            <News
              title={result.title}
              content={result.title}
              source={result.source}
            />
          </main>
          <aside className='news__comments'>
            <h3>Comentarios</h3>
            <textarea
              defaultValue='Deja tu comentario'
              className='news__comments--item'
            />
          </aside>
        </div>
      );
    case 'started':
      return <div>Ya se solicitó el artículo pero no empieza a cargar</div>;
    case 'canceled':
      return <div>Se canceló la solicitud del artículo</div>;
    default:
      break;
  }
};

export default ContentNews;
