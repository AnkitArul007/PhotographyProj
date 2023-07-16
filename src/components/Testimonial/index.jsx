/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unknown-property */
import React, { useEffect, useRef } from "react";
import { css } from "@emotion/react";
import SectionHeaders from "../../commonComponents/SectionHeaders";
import TestimonialCard from "./components/TestimonialCard";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Testimonial = () => {
    // laoder falg
    const [flag, setFlag] = React.useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            setFlag(true)
        }, 3000)
        return ()=>{
            console.log("hello")
        }
    })

  const cardsContainer = useRef(null);

  const handleLeftNavigationClick = () => {
    cardsContainer.current.scrollBy({
      left: -cardsContainer.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const handleRightNavigationClick = () => {
    cardsContainer.current.scrollBy({
      left: cardsContainer.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <React.Fragment>
      <section css={style.section} className="mt-5 position-relative">
        <SectionHeaders pagetitle={"Testimonials"} />
        <div className="container d-flex align-items-center justify-content-center mt-5 bg-transparent">
          <div
            ref={cardsContainer}
            className="team-testimonials bg-transparent d-flex"
            css={css`
              gap: 200px;
              overflow: hidden;
              height: 40rem;
              justify-content: start;
              align-items: start;
              padding-top: 2rem;
              scroll-behavior: smooth;
              scroll-snap-type: x mandatory;
              scroll-padding: 0 50px;
            `}
          >
            <div
            className="bg-transparent"
              css={css`
                flex: 0 0 calc(50% - 100px);
              `}
            >
              <TestimonialCard />
            </div>
            <div
            className="bg-transparent"
              css={css`
                flex: 0 0 calc(50% - 100px);
              `}
            >
              <TestimonialCard />
            </div>
            <div
            className="bg-transparent"
              css={css`
                flex: 0 0 calc(50% - 100px);
              `}
            >
              <TestimonialCard />
            </div>
            <div
            className="bg-transparent"
              css={css`
                flex: 0 0 calc(50% - 100px);
              `}
            >
              <TestimonialCard />
            </div>
            <div
            className="bg-transparent"
              css={css`
                flex: 0 0 calc(50% - 100px);
              `}
            >
              <TestimonialCard />
            </div>
            <div
            className="bg-transparent"
              css={css`
                flex: 0 0 calc(50% - 100px);
              `}
            >
              <TestimonialCard />
            </div>
            <div
                className="bg-transparent"
              css={css`
                flex: 0 0 calc(50% - 100px);
              `}
            >
              <TestimonialCard />
            </div>
          </div>
        </div>

        <div className="navigation-switches">
          <div
            className="leftArrow d-flex justify-content-center align-items-center"
            css={css`
              position: absolute;
              top: calc(50% - 50px);
              left: 30px;
              width: fit-content;
              height: fit-content;
              padding: 1rem;
              border-radius: 50%;
              font-size: var(--large-text);
              background: rgba(255, 255, 255, 0.3);
              cursor: pointer;
            `}
            onClick={handleLeftNavigationClick}
          >
            <AiOutlineArrowLeft
              css={css`
                background: transparent;
                color: red;
              `}
            />
          </div>

          <div
            className="rightArrow d-flex justify-content-center align-items-center"
            css={css`
              position: absolute;
              top: calc(50% - 50px);
              right: 30px;
              width: fit-content;
              height: fit-content;
              padding: 1rem;
              border-radius: 50%;
              font-size: var(--large-text);
              background: rgba(255, 255, 255, 0.3);
              cursor: pointer;
            `}
            onClick={handleRightNavigationClick}
          >
            <AiOutlineArrowRight
              css={css`
                background: transparent;
                color: #000;
              `}
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Testimonial;

const style = {
  section: css`
    min-height: 60vh;
    background: url("https://r4.wallpaperflare.com/wallpaper/242/181/187/abstract-lines-shapes-digital-art-wallpaper-b940c8bd111a1ddb569788cf00d1e6ed.jpg");
    background-attachment: scroll;
    background-position: center;
    background-size: contain;
  `,
  spinner: css`
  background-image: linear-gradient(rgb(186, 66, 255) 35%,rgb(0, 225, 255));
  width: 100px;
  height: 100px;
  animation: spinning82341 1.7s linear infinite;
  text-align: center;
  border-radius: 50px;
  filter: blur(1px);
  box-shadow: 0px -5px 20px 0px rgb(186, 66, 255), 0px 5px 20px 0px rgb(0, 225, 255);
  `,
  spinner1:css`
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
  `
};

