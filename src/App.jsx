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
      <Navbar />
      <Outlet />
    </>
  );
};
