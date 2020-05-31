import React from 'react';
import Categories from '../components/Categories';
import CarouselItem from '../components/CarouselItem';
import CarouselItemMore from '../components/CarouselItemMore';
import useInitialState from '../hooks/useInitialState';

const APIInternacional = 'http://127.0.0.1:8000/api/articles/?q=internacional';
const APINacional = 'http://127.0.0.1:8000/api/articles/?q=nacional';
const APIEspectaculos = 'http://127.0.0.1:8000/api/articles/?q=espectaculos';
const APIDeportes = 'http://127.0.0.1:8000/api/articles/?q=deportes';

const Home = () => {
  const initialStateInternacional = useInitialState(APIInternacional);
  const initialStateNacional = useInitialState(APINacional);
  const initialStateEspectaculos = useInitialState(APIEspectaculos);
  const initialStateDeportes = useInitialState(APIDeportes);

  return (
    <div className='Home'>

      <Categories category='Internacional'>
        {initialStateInternacional.map(item =>
          <CarouselItem key={item.id} {...item} />
        )}
        <CarouselItemMore />
      </Categories>

      <Categories category='Nacional' >
        {initialStateNacional.map(item =>
          <CarouselItem key={item.id} {...item} />
        )}
        <CarouselItemMore />
      </Categories>

      <Categories category='Espectaculos' >
        {initialStateEspectaculos.map(item =>
          <CarouselItem key={item.id} {...item} />
        )}
        <CarouselItemMore />
      </Categories>

      <Categories category='Deportes'>
        {initialStateDeportes.map(item =>
          <CarouselItem key={item.id} {...item} />
        )}
        <CarouselItemMore />
      </Categories>

    </div>
  );
};

export default Home;
