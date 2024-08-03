/* eslint-disable react/no-unknown-property */
import React from "react";
import { css, keyframes } from "@emotion/react";
import Typewriter from "typewriter-effect";
import "./typewriter.css";

const slide = keyframes`
10% {
    opacity: 1;
  }
  20% {
    opacity: 1;
  }
  30% {
    opacity: 0;
  }
  40% {
    transform: scale(1.1);
  }
`;

const style = {
  main: css`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
    background-color: #000;
    div {
      width: 100%;
      height: 100%;
      background-size: cover;
      position: absolute;
      animation: ${slide} 25s infinite;
      opacity: 0;
      &:nth-child(2) {
        animation-delay: 5s;
      }
      &:nth-child(3) {
        animation-delay: 10s;
      }
      &:nth-child(4) {
        animation-delay: 15s;
      }
      &:nth-child(5) {
        animation-delay: 20s;
      }
    }
  `,
  textOverlay: css`
  background: transparent;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  margin: auto auto;
  color: #fff;
  font-size: 4.5rem;;
  overflow: visible;
  display: flex;
  align-items: end;
  justify-content: center;
  `,
  textOverlayInner: css`
  width: 50%;
  height: 50%;
  margin-left:  0 auto;
  background:rgba(0,0,0,0);
  color: #fff;
  font-weight: 800;
  white-space: wrap;
  span.Typewriter__wrapper {
  font-family: 'Dancing Script', cursiv !important;
  line-height: 76px;
  font-size: 76px;
  fonnt-weight: 500;
  }
  span.Typewriter__cursor{
    font-family: 'Dancing Script', cursiv !important;
  line-height: 76px;
  font-size: 76px;
  fonnt-weight: 500;
  }
  `,
  overlayText: css`
  background: transparent !important;
  color: #fff;
  font-weight: 800;
  `,
};

const ImageSlider = () => {
  return (
    <>
      <div css={style.main}>
        <div style={{ backgroundImage: `url("/images/banner1.jpg")` }}></div>
        <div style={{ backgroundImage: `url("/images/banner2.jpg")` }}></div>
        <div style={{ backgroundImage: `url("/images/banner3.jpg")` }}></div>
        <div style={{ backgroundImage: `url("/images/banner4.jpg")` }}></div>
        <div style={{ backgroundImage: `url("/images/banner5.jpg")` }}></div>
      </div>

      {/* typer writer effect */}
      <div css={style.textOverlay}>
        <div css={style.textOverlayInner}>
          <Typewriter
            style={{ background: "transparent !important", fontFamily: "'Dancing Script', cursive" }}
            options={{
              strings: [
                "Welcome to Rushal Creation",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
