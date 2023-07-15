import React from 'react'
import Carousel from '../components/Carousel'
import About from '../components/About'
import Categories from '../components/Categories'
<<<<<<< Updated upstream
import Testimonial from '../components/Testimonial/index'
=======
import Footer from '../components/Footer';
import About1 from '../components/About/About';
>>>>>>> Stashed changes

const Home = () => {
  return (
    <React.Fragment>
        <Carousel />
<<<<<<< Updated upstream
        <Categories />
        <About />
        <Testimonial />
=======
        {/* <About /> */}
        <About1 />
        <Categories />
>>>>>>> Stashed changes
    </React.Fragment>
  )
}

export default Home