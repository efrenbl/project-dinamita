import React from 'react';
import Categories from '../components/Categories';
import CarouselItem from '../components/CarouselItem';
import CarouselItemMore from '../components/CarouselItemMore';
import { client } from '../client';
import useFetchState from '../hooks/useFetchState';

const Home = () => {
  /** @type {{[category: string]: import('../../types').Article[]}} */
  const initialState = {};
  const { state, result } = useFetchState(client.getArticlesByCategory, initialState);
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
                  />
                ))}
                <CarouselItemMore />
              </Categories>
            );
          })}
        </div>
      );
    default:
      return (
        <div className='Home'>
          Error estado desconocido
          <pre>{{ state, result }}</pre>
        </div>
      );
  }
};

export default Home;
