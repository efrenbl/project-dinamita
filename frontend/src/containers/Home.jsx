import React from 'react';
import Header from '../components/Header';

import About from '../components/About';
import CategoriesSection from '../components/CategoriesSection';

const Home = () => (
  <div className='Home'>
    <Header />
    <About />
    <CategoriesSection />
  </div>
);

export default Home;
