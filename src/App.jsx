import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Navbar from './components/Navabar/Navbar'
import Home from "./pages/index";
import Stories from "./components/Stories/index"

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
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;

const Root = () => {

  return (
    <>
<<<<<<< Updated upstream
      <Navbar />
      <Outlet />
=======
      <div className="container">
        <h1 style={{textAlign: "center", fontSize:"var(--h1-size)"}} className={`metallic-text-grad`}>Rushal Creation</h1>
        <Carousel></Carousel>
        <div><About /></div>
        <Categories></Categories>
        <Navbar name={"ankit"}/>
        <Stories />
        <Categories />
        <Story />
        <Footer></Footer>
        {/* <ContactUs /> */}
      </div>
>>>>>>> Stashed changes
    </>
  );
};
