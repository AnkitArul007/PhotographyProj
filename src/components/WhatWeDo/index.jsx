/* eslint-disable react/no-unknown-property */
import { css } from "@emotion/react";
import SectionHeaders from "../../commonComponents/SectionHeaders";

const WhatWeDo = () => {
  return (
    <>
      <section className="my-5 " css={style.categorySec}>
        <div className="text-center py-3" css={style.border}></div>
        <div className="container py-5">
          <div className="pb-5">
            <SectionHeaders pagetitle={"Who Are We"} />
          </div>
          <p css={style.text}>
            Rusalk Creation is a dynamic photography and filmmaking company
            specializing in capturing the magic of weddings through stunning
            visuals and cinematic storytelling. With a passion for preserving
            precious moments, they also excel in wildlife photography, sports
            events, and celebrations such as birthday parties and pre-wedding
            shoots. Their skilled team of photographers and filmmakers delivers
            high-quality, tailored experiences for clients, ensuring every
            occasion is documented beautifully. Rusalk Creation combines
            creativity, technical expertise, and attention to detail, making
            them a versatile choice for all photography and filmmaking needs.
          </p>
        </div>
        <div className="text-center py-3" css={style.border}></div>
      </section>
    </>
  );
};

export default WhatWeDo;

const style = {
  border: css`
    border-block-start: 1.5px solid;
    border-image-source: linear-gradient(
      90deg,
      transparent,
      #f81ce5,
      #7928ca,
      #eb367f,
      transparent 100%
    );
    border-image-slice: 1;

    @media (max-width: 768px) {
      border-width: 1px;
    }
  `,
  text: css`
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    word-spacing: 1px;
    letter-spacing: 0.5px;
    text-align: justify;
    line-height: 200%;
    font-family: "Julius Sans One", sans-serif;
  `,
};
