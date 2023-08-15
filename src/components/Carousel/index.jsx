/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import {css} from "@emotion/react";
// import { Children } from 'react';
import { images } from "../../database/carousel_images";
import Typewriter  from "typewriter-effect";
import "./typewriter.css"


const style = {
  carouselDiv: css`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  `,
  innerDiv: css`
  width: 100vw;
  height: calc(100vh-100px);
  white-space: nowrap;
  transition: transform 1s;
  `,
  carouselItem: css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
  `,
  carouseImage: css`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  `,
  control: css`
  display: flex;
  justify-content: center;
  z-index: 99;
  button {
    margin: 5px;
  }
  `,
  textOverlay: css`
  background: transparent;
  position: absolute;
  top: 0;
  // laft: 0;
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 64px;
  overflow: visible;
  display: flex;
  align-items:center;
  justify-content: center;
  `,
  textOverlayInner: css`
  width: 40%;
  height: 50%;
  margin-left:  0 auto;
  background:rgba(0,0,0,0);
  color: #fff;
  font-weight: 800;
  white-space: wrap;
  border-radius: 18px;
  `,
  overlayText: css`
  background: transparent !important;
  color: #fff;
  font-weight: 800;
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
  let lastIdx = images.length - 1;

  const fetchCarouselImages = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos/");
    const data = await res.json();
    setImageData([...data]);
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

  const controlCarousel = () => {
    setCurrentIdx((prev) => prev != lastIdx ? prev + 1 : 0)
  }

  useEffect(() => {
    const timeoutX = setTimeout(() => {
      controlCarousel();
    }, 3000);

    return () => {
      clearTimeout(timeoutX);
    }
  }, [currentIdx]);

  return (
    <React.Fragment>
      <div css={style.carouselDiv}>
        <div css={style.innerDiv} style={{ transform: `translateX(${-100 * currentIdx}%)` }}>
          {imageData.slice(0).map((image, index) => {
            return (
              <CarouselItem key={index}>
                <img
                css={style.carouseImage}
                  src={image.url}
                  alt="carousel image"
                />

              </CarouselItem>
              
            );
          })}

        </div>
        {/* <div css={style.control}>
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleNext}>Next</button>
        </div> */}
          <div css={style.textOverlay}>
            <div css={style.textOverlayInner}> 
            <Typewriter style={{background: "transparent !important"}}
              options={{
                strings: ['Welcome to Rushal Creation', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
                autoStart: true,
                loop: true,
              }}
            />
            </div>
          </div>
      </div>
    </React.Fragment>
  );
}
