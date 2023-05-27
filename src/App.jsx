import './App.css';
import Carousel from './components/Carousel';
import About from './components/About';
import Categories from './components/Categories';
import Footer from './components/Footer';
import './App.css'
import Navbar from './components/Navabar/Navbar'


function App() {

  return (
    <>
      <h1 style={{textAlign: "center"}}>Rushal Creation</h1>
      <Carousel></Carousel>
      <About></About>
      <Categories></Categories>
      <Footer></Footer>
      <Navbar name={"ankit"}/>
    </>
  )
}

export default App
