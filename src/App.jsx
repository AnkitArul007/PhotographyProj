import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Navbar from './components/Navabar/Navbar';
import Home from "./pages/index";
import Stories from "./components/Stories/index";
<<<<<<< Updated upstream
import Footer from "./components/Footer";
=======
import Story from "./components/Stories/Story/index";
import Footer from "./components/Footer";

>>>>>>> Stashed changes
// import About from "./components/About";
// import Carousel from "./components/Carousel";
// import Categories from "./components/Categories";
// import Footer from "./components/Footer";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <Root />
        }>
        <Route
          index
          path="/home"
          element={<Home />}
        />
        <Route
          index
          path="/stories"
          element={<Stories />}
        />
        <Route
          index
          path="story"
          element={<Story/>}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;

const Root = () => {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
