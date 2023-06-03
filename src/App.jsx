import './App.css';
import Carousel from './components/Carousel';
import About from './components/About';
import Categories from './components/Categories';
import Footer from './components/Footer';
import './App.css'
import Navbar from './components/Navabar/Navbar'
import Stories from './components/Stories';
// import { fontStyles } from "./utilities/Theme/index"
import Images from './components/Images';
import Story from './components/Stories/Story';


function App() {

  return (
    <>
      <div className="container">
        {/* <h1 style={{textAlign: "center", fontSize:"var(--h1-size)"}} className={`metallic-text-grad`}>Rushal Creation</h1>
        <Carousel></Carousel>
        <div><About /></div>
        <Categories></Categories>
        <Footer></Footer>
        <Navbar name={"ankit"}/> */}
        <Stories />
        <Categories />
        <Story />
        
      </div>
    </>
  )
}

export default App
