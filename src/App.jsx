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
import ImagesPage from "./pages/ImagesPage";
import Story from "./components/Stories/Story/index";
import ContactForm from "./components/ContactUS";
import Faqs from "./components/FAQs";
import Films from "./components/Fims";
import Wedding from "./components/Wedding";
import WeddingBlog from "./components/Wedding/WeddingBlog";
import { NotificationProvider } from "./components/toast/index.jsx";
import PreWedding from "./pages/PreWedding.jsx";
import IndividualCategory from "./pages/IndividualCategory.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
// import About from "./components/About";
// import Carousel from "./components/Carousel";
// import Categories from "./components/Categories";
// import Footer from "./components/Footer";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/images" element={<ImagesPage />} />
        <Route path="/pre-wedding" element={<PreWedding />} />
        <Route path="/story" element={<Story />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/films" element={<Films />} />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/wedding/:weddingName" element={<WeddingBlog />} />
        <Route path="/:id" element={<IndividualCategory />} />
        <Route index path="/about-us" element={<AboutUsPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;

const Root = () => {
  const location = useLocation();
  return (
    <>
      <NotificationProvider>
        {location.pathname !== "/" ? (
          <>
            <div
              css={css`
                margin-bottom: 100px;
              `}
            >
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
        )}
      </NotificationProvider>
    </>
  );
};
