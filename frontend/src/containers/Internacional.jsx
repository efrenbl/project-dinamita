import React from 'react';
import CategoryView from '../components/CategoryView';
import CarouselItem from '../components/CarouselItem';
import useFetchState from '../hooks/useFetchState';
import { client } from '../client';

const Internacional = () => {
  const { result: initialStateInternacional } = useFetchState(() => client.getArticles('internacional'));
  return (
    <div className='Category'>
      {initialStateInternacional.map((item) => (
        <CategoryView key={item.category} {...item}>
          {initialStateInternacional.map((item) => <CarouselItem key={item.id} {...item} />)}
        </CategoryView>
      ))}
    </div>
  );
};

export default Internacional;
