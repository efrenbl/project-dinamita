import React from 'react';
import Categories from '../components/Categories';
import CarouselItem from '../components/CarouselItem';
import CarouselItemMore from '../components/CarouselItemMore';
import { client } from '../client';
import useFetchState from '../hooks/useFetchState';

/** @typedef {{[category: string]: import('../../types').Article[]}} CategoryMap */

const Home = () => {
  /** @type {CategoryMap} */
  const initialState = Object.freeze({});
  const { state, result } = useFetchState(
    () => client.getArticlesByCategory(),
    initialState
  );
  switch (state) {
    case 'idle':
      return <div className='Home'>Pendiente de solicitar</div>;
    case 'started':
      return <div className='Home'>Datos solicitados</div>;
    case 'error':
      return <div className='Home'>ERROR SOLICITANDO LISTADO DE ARTICULOS</div>;
    case 'loading':
      return <div className='Home'>Cargando...</div>;
    case 'resolved':
      return (
        <div className='Home'>
          {Object.keys(result).map((category) => {
            const items = result[category];
            return (
              <Categories key={category} category={category}>
                {items.map((item) => (
                  <CarouselItem
                    key={item.id}
                    title={item.title}
                    content={item.content}
                    category={item.category}
                    articleId={item.id}
                  />
                ))}
                <CarouselItemMore path={category} />
              </Categories>
            );
          })}
        </div>
      );
    default:
      return (
        <div className='Home'>
          Error estado desconocido
          <pre>{JSON.stringify({ state, result })}</pre>
        </div>
      );
  }
};

export default Home;
