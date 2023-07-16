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

  return (
    flag ? (
      <>
      <div className="container py-5 d-flex flex-column align-content-center justify-content-center">
        <SectionHeaders pagetitle={"stories"} />
        <div className="cardsWrapper  position-relative mt-5">
          <div
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
    ) : (
      <div
      css={css`
        width: 100%;
        height: 90vh;
        display: grid;
        place-items: center;
      `}>
      <div css={style.spinner}>
        <div css={style.spinner1}></div>
      </div>
    </div>
    )
  );
}

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
    background-color: rgb(0, 0, 0);
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

