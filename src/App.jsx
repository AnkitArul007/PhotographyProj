/* eslint-disable react/no-unknown-property */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./App.css";
import { css } from "@emotion/react";
import Navbar from "./components/Navabar/Navbar";
import Home from "./pages/index";
import Stories from "./components/Stories/index";
import Footer from "./components/Footer";
import Images from "./components/ImageComponent/Images";
import ImagesPage from "./pages/ImagesPage";
import Story from "./components/Stories/Story/index"
// import About from "./components/About";
// import Carousel from "./components/Carousel";
// import Categories from "./components/Categories";
// import Footer from "./components/Footer";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index path="/home" element={<Home />} />
        <Route index path="/stories" element={<Stories />} />
        <Route index path="/images" element={<ImagesPage />} />
        <Route index path="/story" element={<Story />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;

const Root = () => {
  const location = useLocation();
  return location.pathname !== "/home" ? (
    <>
      <div
        css={css`
          margin-bottom: 100px;
        `}>
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </>
  ) : (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
