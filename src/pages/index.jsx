import React from 'react'
import Carousel from '../components/Carousel'
import About from '../components/About'
import Categories from '../components/Categories'
import Testimonial from '../components/Testimonial/index'

const Home = () => {
  return (
    <React.Fragment>
        <Carousel />
        <Categories />
        <About />
        <Testimonial />
    </React.Fragment>
  )
}

export default Home