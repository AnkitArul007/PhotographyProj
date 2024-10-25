/* eslint-disable react/no-unknown-property */
import React from "react";
// import Carousel from '../components/Carousel';
import Categories from "../components/Categories";
import Testimonial from "../components/Testimonial/index";
import About from "../components/About";
import ImageSlider from "../components/ImageSlider";
import { css } from "@emotion/react";
import WhatWeDo from "../components/WhatWeDo";
import Spinner from "../commonComponents/Spinner";

const Home = () => {
  const [flag, setFlag] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setFlag(true);
    }, 1000);
    return () => {};
  }, []);
  return flag ? (
    <React.Fragment>
      <ImageSlider />
      <WhatWeDo />
      <Categories />
      <About />
      <Testimonial />
    </React.Fragment>
  ) : (
    <Spinner />
  );
};

export default Home;
