/* eslint-disable react/no-unknown-property */
import React from "react";
// import Carousel from '../components/Carousel';
import Categories from "../components/Categories";
import Testimonial from "../components/Testimonial/index";
import About from "../components/About";
import ImageSlider from "../components/ImageSlider";
import { css } from "@emotion/react";

const Home = () => {
  // laoder falg
  const [flag, setFlag] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setFlag(true);
    }, 1000);
    return () => {
      console.log("hello");
    };
  }, []);
  return flag ? (
    <React.Fragment>
      {/* <Carousel /> */}
      <ImageSlider />
      <Categories />
      <About />
      <Testimonial />
    </React.Fragment>
  ) : (
    // eslint-disable-next-line no-undef
    <div
      css={css`
        width: 100%;
        height: 90vh;
        display: grid;
        place-items: center;
      `}
    >
      <div css={style.spinner}>
        <div css={style.spinner1}></div>
      </div>
    </div>
  );
};

export default Home;

const style = {
  spinner: css`
    background-image: linear-gradient(rgb(186, 66, 255) 35%, rgb(0, 225, 255));
    width: 100px;
    height: 100px;
    animation: spinning82341 1.7s linear infinite;
    text-align: center;
    border-radius: 50px;
    filter: blur(1px);
    box-shadow: 0px -5px 20px 0px rgb(186, 66, 255),
      0px 5px 20px 0px rgb(0, 225, 255);
  `,
  spinner1: css`
    background-color: rgb(36, 36, 36);
    width: 100px;
    height: 100px;
    border-radius: 50px;
    filter: blur(10px);

    @keyframes spinning82341 {
      to {
        transform: rotate(360deg);
      }
    }
  `,
};
