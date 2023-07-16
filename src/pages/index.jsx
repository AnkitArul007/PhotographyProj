import React from 'react';
import Carousel from '../components/Carousel';
import About from '../components/About';
import Categories from '../components/Categories';
import Testimonial from '../components/Testimonial/index';
import About1 from '../components/About/About';

const Home = () => {
  return (
    <React.Fragment>
        <Carousel />
        <Categories />
        <About1 />
        <Testimonial />
    </React.Fragment>
  )
}

export default Home