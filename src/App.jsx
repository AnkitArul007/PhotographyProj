import './App.css';
import Carousel from './components/Carousel';
import About from './components/About';
import Categories from './components/Categories';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <h1 style={{textAlign: "center"}}>Rushal Creation</h1>
      <Carousel></Carousel>
      <About></About>
      <Categories></Categories>
      <Footer></Footer>
    </>
  )
}

export default App
