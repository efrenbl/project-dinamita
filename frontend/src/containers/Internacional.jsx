import React from 'react';
import CategoryView from '../components/CategoryView';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';

const APIInternacional = 'http://127.0.0.1:8000/api/articles/?q=internacional';

const Internacional = () => {
  const initialStateInternacional = useInitialState(APIInternacional);
  return (<div className='Category'>
    {initialStateInternacional.map(item =>
      <CategoryView key={item.category} {...item} >
        {initialStateInternacional.map(item =>
          <CarouselItem key={item.id} {...item} />
        )}
      </CategoryView>
    )}
  </div>
  );
};

export default Internacional;
