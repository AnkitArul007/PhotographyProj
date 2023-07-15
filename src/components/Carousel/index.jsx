/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import {css} from "@emotion/react";
// import { Children } from 'react';
import { images } from "../../database/carousel_images";

const style = {
  carouselDiv: css`
  width: 100vw;
  height: calc(100vh-96px);
  overflow: hidden;
  `,
  innerDiv: css`
  white-space: nowrap;
  transition: transform 1s;
  `,
  carouselItem: css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
   img {
    width: 100%;
    height: 100%;
    object-fit: cover;
   }
  `,
  control: css`
  display: flex;
  justify-content: center;
  z-index: 99;
  button {
    margin: 5px;
  }
  `,
}



export function CarouselItem(props) {
  return (
    <>
      <div css={style.carouselItem}>{props.children}</div>
    </>
  );
}

export default function Carousel() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [imageData, setImageData] = useState([]);
  let lastIdx = 10;

  const fetchCarouselImages = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos/");
    const data = await res.json();
    // console.log(data);
    setImageData([...data]);
    // setImageData([data]);

    console.log(imageData);
  };
  useEffect(() => {
    // fetchCarouselImages();
    setImageData(images);
  }, []);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev != 0 ? prev - 1 : 0));
  };
  const handleNext = () => {
    setCurrentIdx((prev) => prev != lastIdx ? prev + 1 : lastIdx);
  };

  return (
    <React.Fragment>
      <div css={style.carouselDiv}>
        <div css={style.innerDiv} style={{ transform: `translateX(${-100 * currentIdx}%)` }}>
          {imageData.slice(0).map((image, index) => {
            return (
              <CarouselItem key={index}>
                <img
                  src={image.url}
                  alt="carousel image"
                />
              </CarouselItem>
            );
          })}
        </div>
        <div css={style.control}>
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </React.Fragment>
  );
}
