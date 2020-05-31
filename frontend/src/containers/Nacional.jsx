import React from 'react';
import CarouselItem from '../components/CarouselItem';
import ViewNacional from '../components/ViewNacional';
import useInitialState from '../hooks/useInitialState';

const APINacional = 'http://127.0.0.1:8000/api/articles/?q=nacional';

const Nacional = () => {
  const initialStateNacional = useInitialState(APINacional);
  return (<div className='Category'>
    <ViewNacional category='Nacional' >
      {initialStateNacional.map(item =>
        <CarouselItem key={item.id} {...item} />
      )}
    </ViewNacional>
  </div>
  );
};

export default Nacional;

