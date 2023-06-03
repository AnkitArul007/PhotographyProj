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
  const [isActiveCard, setIsActiveCard] = useState(0);

  // getting reference if the element inside which scroll will occur
  const cardsContainer = useRef();

  // writing the navigation functions
  const handleLeftNavigationClick = (e)=>{
    const width = cardsContainer.current.clientWidth;
    cardsContainer.current.scrollLeft = cardsContainer.current.scrollLeft - width;
    
  }
  const handleRightNavigationClick = (e)=>{
    const width = cardsContainer.current.clientWidth;
    cardsContainer.current.scrollLeft = cardsContainer.current.scrollLeft + width;
  }
  return (
    <>
      <div className="container">
        <SectionHeaders pagetitle={"stories"} />
        <div className="cardsWrapper  position-relative">
          <div ref={cardsContainer} className="cardsContainer row d-flex gap-5 justify-content-start flex-nowrap overflow-x-hidden" css={css`
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
                isActiveCard={isActiveCard}
                setIsActiveCard={setIsActiveCard}
              />
            ))}
          </div>
            <div className="leftArrow d-flex justify-content-center align-items-center" css={css`
            position:absolute;
            top:calc(50% - 50px);
            left:0;
            width:fit-content;
            height:fit-content;
            padding:1rem;
            border-radius:50%;
            font-size:var(--large-text);
            background:rgba(255,255,255,0.3);
            `}
            onClick={(e)=>handleLeftNavigationClick(e)}
            >
              <AiOutlineArrowLeft css={css`background:transparent; color:red`}/>
            </div>
            <div className="rightArrow d-flex justify-content-center align-items-cente" css={css`
            position:absolute;
            top:calc(50% - 50px);
            right:0;
            width:fit-content;
            height:fit-content;
            padding:1rem;
            border-radius:50%;
            font-size:var(--large-text);
            background:rgba(255,255,255,0.3)
            `}
            onClick={(e)=>handleRightNavigationClick(e)}
            >
              <AiOutlineArrowRight css={css`background:transparent; color:#000`}/>
            </div>
        </div>
      </div>
    </>
  );
}
