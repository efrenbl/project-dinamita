import React from 'react';
import Categories from '../components/Categories';
import CarouselItem from '../components/CarouselItem';
import CarouselItemMore from '../components/CarouselItemMore';
import useInitialState from '../hooks/useInitialState';

const APIInternacional = 'http://127.0.0.1:8000/api/articles/?q=internacional';
const APINacional = 'http://127.0.0.1:8000/api/articles/?q=nacional';
const APIFinanzas = 'http://127.0.0.1:8000/api/articles/?q=finanzas';
const APIDeportes = 'http://127.0.0.1:8000/api/articles/?q=deportes';

const Home = () => {
  const initialStateInternacional = useInitialState(APIInternacional);
  const initialStateNacional = useInitialState(APINacional);
  const initialStateFinanzas = useInitialState(APIFinanzas);
  const initialStateDeportes = useInitialState(APIDeportes);

  return (
    <div className='Home'>
      {initialStateInternacional.map((item) => (
        <Categories key={item.category} category={item.category}>
          {initialStateInternacional.map((item) => (
            <CarouselItem
              key={item.id}
              title={item.title}
              content={item.content}
            />
          ))}
          <CarouselItemMore />
        </Categories>
      ))}

      {initialStateNacional.map((item) => (
        <Categories key={item.category} category={item.category}>
          {initialStateNacional.map((item) => (
            <CarouselItem
              key={item.id}
              title={item.title}
              content={item.content}
            />
          ))}
          <CarouselItemMore />
        </Categories>
      ))}

      {initialStateFinanzas.map((item) => (
        <Categories key={item.category} category={item.category}>
          {initialStateFinanzas.map((item) => (
            <CarouselItem
              key={item.id}
              title={item.title}
              content={item.content}
            />
          ))}
          <CarouselItemMore />
        </Categories>
      ))}

      {initialStateDeportes.map((item) => (
        <Categories key={item.category} category={item.category}>
          {initialStateDeportes.map((item) => (
            <CarouselItem
              key={item.id}
              title={item.title}
              content={item.content}
            />
          ))}
          <CarouselItemMore />
        </Categories>
      ))}
    </div>
  );
};

export default Home;
