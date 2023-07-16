/* eslint-disable react/no-unknown-property */
import React, { useState, useEffect, useRef } from "react";
import { css } from "@emotion/react";
import "bootstrap/dist/css/bootstrap.css";
import SectionHeaders from "../../commonComponents/SectionHeaders";
import StoryCards from "./components/storyCards";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// importing Data
import StoryData from "./data/stories.json";

export default function Stories() {
  // using states to set the active card
  // const [isActiveCard, setIsActiveCard] = useState(0);

  // getting reference if the element inside which scroll will occur
  const cardsContainer = useRef();

  // writing the navigation functions
  // const handleLeftNavigationClick = (e)=>{
  //   const width = cardsContainer.current.clientWidth;
  //   cardsContainer.current.scrollLeft = cardsContainer.current.scrollLeft - width;

  // }
  // const handleRightNavigationClick = (e)=>{
  //   const width = cardsContainer.current.clientWidth;
  //   cardsContainer.current.scrollLeft = cardsContainer.current.scrollLeft + width;
  // }
  return (
    <>
      <div className="container d-flex flex-column align-content-center justify-content-center">
        <SectionHeaders pagetitle={"stories"} />
        <div className="cardsWrapper  position-relative mt-5">
          <div
            ref={cardsContainer}
            className="cardsContainer row d-flex gap-5 justify-content-around"
            css={css`
              scroll-behavior: smooth;
            `}>
            {StoryData.map((item, id) => (
              <StoryCards
                key={id}
                title={item.title}
                clientName={item.clientData}
                story={item.story}
                url={item.url}
                id={id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
