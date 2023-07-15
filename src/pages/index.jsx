import React from 'react'
import Carousel from '../components/Carousel'
import About from '../components/About'
import Categories from '../components/Categories'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <React.Fragment>
        <Carousel />
        <About />
        <Categories />
        <Footer />
    </React.Fragment>
  )
}

export default Home