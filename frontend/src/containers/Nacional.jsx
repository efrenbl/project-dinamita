import React from 'react';
import CarouselItem from '../components/CarouselItem';
import ViewNacional from '../components/ViewNacional';
import useFetchState from '../hooks/useFetchState';
import { client } from '../client';

const Nacional = () => {
  const { result: initialStateNacional } = useFetchState(() => client.getArticles('nacional'));
  return (
    <div className='Category'>
      {initialStateNacional.map((item) => (
        <ViewNacional key={item.category} {...item}>
          {initialStateNacional.map((item) => <CarouselItem key={item.id} {...item} />)}
        </ViewNacional>
      ))}
    </div>
  );
};

export default Nacional;

