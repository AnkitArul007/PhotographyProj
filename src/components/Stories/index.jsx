/* eslint-disable react/no-unknown-property */
import React from "react";
import { css } from "@emotion/react";
import "bootstrap/dist/css/bootstrap.css";
import SectionHeaders from "../../commonComponents/SectionHeaders";
import StoryCards from "./components/storyCards";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// importing Data
import StoryData from "./data/stories.json";

export default function Stories() {
  return (
    <>
      <div className="container">
        <SectionHeaders pagetitle={"stories"} />
        <div className="cardsWrapper  position-relative">
          <div className="row d-flex gap-5 justify-content-start flex-nowrap overflow-hidden">
            {StoryData.map((item, id) => (
              <StoryCards
                key={id}
                title={item.title}
                clientName={item.clientData}
                story={item.story}
                url={item.url}
              />
            ))}
          </div>
          <div className="navigateArrows d-flex justify-content-between align-items-center" css={css`
          position: absolute;
          width:100%;
          height: 100%;
          top: 0;
          left:0;
          background:transparent;
          `}>
            <div className="leftArrow d-flex justify-content-center align-items-center" css={css`
            width:fit-content;
            height:fit-content;
            padding:1rem;
            border-radius:50%;
            font-size:var(--large-text);
            background:rgba(255,255,255,0.3);
            `}
            onClick={()=>console.log("left clicked")}
            >
              <AiOutlineArrowLeft css={css`background:transparent; color:red`}/>
            </div>
            <div className="rightArrow d-flex justify-content-center align-items-cente" css={css`
            width:fit-content;
            height:fit-content;
            padding:1rem;
            border-radius:50%;
            font-size:var(--large-text);
            background:rgba(255,255,255,0.3)
            `}
            onClick={()=>console.log("right clicked")}
            >
              <AiOutlineArrowRight css={css`background:transparent; color:#000`}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
