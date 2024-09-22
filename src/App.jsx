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
import Navbar from "./components/Navabar/Navbar";
import Home from "./pages/index";
import Stories from "./components/Stories/index";
import Footer from "./components/Footer";
import ImagesPage from "./pages/ImagesPage";
import Story from "./components/Stories/Story/index";
import ContactForm from "./components/ContactUS";
import Faqs from "./components/FAQs";
import Films from "./components/Fims";
import PreWedding from "./components/Wedding";
import WeddingBlog from "./components/Wedding/WeddingBlog";
import { NotificationProvider } from "./components/toast/index.jsx";
// import PreWedding from "./pages/PreWedding.jsx";
import IndividualCategory from "./pages/IndividualCategory.jsx";
import AboutUs from "./components/AboutUs/index.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        {/* <Route index path="/home" element={<Home />} /> */}
        <Route index path="/stories" element={<Stories />} />
        <Route index path="/images" element={<ImagesPage />} />
        <Route index path="/pre-wedding" element={<PreWedding />} />
        <Route index path="/story" element={<Story />} />
        <Route index path="/contact" element={<ContactForm />} />
        <Route index path="/faqs" element={<Faqs />} />
        <Route index path="/films" element={<Films />} />
        <Route path="/pre-wedding" element={<PreWedding />} />
        <Route path="/pre-wedding/:weddingName" element={<WeddingBlog />} />
        <Route index path="/:id" element={<IndividualCategory />} />
        <Route index path="/about-us" element={<AboutUs />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;

const Root = () => {
  const location = useLocation();
  if (location.pathname === "/") {
    return (
      <>
        <NotificationProvider>
          <Navbar />
          <Home />
          <Footer />
        </NotificationProvider>
      </>
    );
  } else {
    return (
      <>
        <NotificationProvider>
          <>
            <div className="mb-5">
              <Navbar />
            </div>
            <div className="mt-5 py-5">
              <Outlet />
            </div>
            <Footer />
          </>
        </NotificationProvider>
      </>
    );
  }
};
