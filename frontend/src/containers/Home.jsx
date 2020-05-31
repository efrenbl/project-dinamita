import React, { useState, useEffect } from 'react';
import Categories from '../components/Categories';
import CarouselItem from '../components/CarouselItem';
import CarouselItemMore from '../components/CarouselItemMore';

const Home = () => {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/articles/')
      .then(response => response.json())
      .then(data => setArticles(data));
  }, []);

  console.log(articles);
  return (
    <div className='Home'>

      {articles.map(item =>
        <Categories key={item.category} {...item} >
          {articles.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
          <CarouselItemMore />
        </Categories>
      )}

      {/*       <Categories title='Nacional'>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItemMore />
      </Categories>

      <Categories title='Finanzas'>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItemMore />
      </Categories>

      <Categories title='Deportes'>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItemMore />
      </Categories>

      <Categories title='Espectáculos'>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItemMore />
      </Categories> */}
    </div>
  );
};

export default Home;
