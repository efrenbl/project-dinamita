import React from 'react';
import CarouselItem from '../components/CarouselItem';
import ViewEspectaculos from '../components/ViewEspectaculos';
import useInitialState from '../hooks/useInitialState';

const APIEspectaculos = 'http://127.0.0.1:8000/api/articles/?q=espectaculos';

const Espectaculos = () => {
  const initialStateEspectaculos = useInitialState(APIEspectaculos);
  return (<div className='Category'>
    <ViewEspectaculos category='Espectaculos'>
      {initialStateEspectaculos.map(item =>
        <CarouselItem key={item.uniqueId} {...item} />
      )}
    </ViewEspectaculos>
  </div>
  );
};

export default Espectaculos;
