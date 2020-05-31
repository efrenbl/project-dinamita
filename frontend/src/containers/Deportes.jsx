import React from 'react';
import CarouselItem from '../components/CarouselItem';
import ViewDeportes from '../components/ViewDeportes';
import useInitialState from '../hooks/useInitialState';

const APIDeportes = 'http://127.0.0.1:8000/api/articles/?q=deportes';

const Deportes = () => {
  const initialStateDeportes = useInitialState(APIDeportes);
  return (<div className='Category'>
    <ViewDeportes category='Deportes'>
      {initialStateDeportes.map(item =>
        <CarouselItem key={item.uniqueId} {...item} />
      )}
    </ViewDeportes>
  </div>
  );
};

export default Deportes;
