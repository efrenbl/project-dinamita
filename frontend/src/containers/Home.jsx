import React, { Component } from 'react';
import axios from 'axios';
import Categories from '../components/Categories';
import CarouselItem from '../components/CarouselItem';
import Internacional from './Internacional';

class Home extends Component {

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/articles/2')
      .then(result => {
        console.log(result.data)
      }).catch(console.log);
  }

  render() {
    return (
      <div className='Home'>
        <Categories title={Internacional}>

          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />

        </Categories>
      </div>
    );
  }
};

export default Home;
