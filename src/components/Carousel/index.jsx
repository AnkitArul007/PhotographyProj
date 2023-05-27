/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
// import { Children } from 'react';
import "./carousel.css";

export function CarouselItem(props) {
  // console.log(props);
  return (
    <>
      <div className="carouselItem">{props.children}</div>
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
    fetchCarouselImages();
  }, []);
  const handlePrev = () => {
    setCurrentIdx((prev) => (prev != 0 ? prev - 1 : 0));
  };
  const handleNext = () => {
    setCurrentIdx((prev) => prev != lastIdx ? prev + 1 : lastIdx);
  };

  return (
    <React.Fragment>
      <div className="carousel-div">
        <div className="inner-div" style={{ transform: `translateX(${-100 * currentIdx}%)` }}>
          {imageData.slice(0, 11).map((image, index) => {
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
        <div>
        <div className="control">
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleNext}>Next</button>
        </div>
        </div>
      </div>
    </React.Fragment>
  );
}
