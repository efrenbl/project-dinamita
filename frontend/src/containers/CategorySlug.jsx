import React from 'react';
// import { useParams } from 'react-router-dom';
import CarouselItem from '../components/CarouselItem';
import ViewNacional from '../components/ViewNacional';
import useFetchState from '../hooks/useFetchState';
import { client } from '../client';

/** @type {React.FunctionComponent} */
const CategorySlug = ({ match }) => {
  const { category } = match.params;
  const { result: initialStateNacional } = useFetchState(() => client.getArticles({ category }), []);
  return (
    <div className='Category'>
      <ViewNacional key={category} category={category}>
        {initialStateNacional.map((item) => <CarouselItem key={item.id} title={item.title} content={item.content} />)}
      </ViewNacional>
    </div>
  );
};

export default CategorySlug;

