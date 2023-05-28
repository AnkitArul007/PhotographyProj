/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */
import React from "react";
import { css } from "@emotion/react";
import { imgData } from "./imgData";

const style = {
  mainHeading: css`
    background-color: var(--h1-size);
  `,
  imgGrid: css`
    columns: 4;
    column-gap: 10px;
  `,
  imageDiv: css`
    width: 250px;
    padding: 10px;
    border-radius: 4px;
    break-inside: avoid;
  `,
  wImg: css`
    width: 100%;
    object-fit: contain;
    `,
  // imgGrid: css`
  //   display: grid;
  //   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  //   grid-tempalate-rows: auto;
  //   grid-auto-flow: dense;
  //   `,
  // imageDiv: css`
  //   max-width: 250px;
  //   height: min-content;
  //   padding: 8px;
  //   break-inside: avoid;
  // `,
  // wImg: css`
  //   width:100%;
  // `,
};

export default function Images() {
  return (
    <>
      <div className="container">
        <div>
          <h1 className="metallic-text-grad text-center pb-5">IMAGES</h1>
        </div>
        <div css={style.imgGrid}>
          {imgData.map((item, index) => {
            return (
              <div key={index} css={style.imageDiv}>
                <img
                src={`images/${item.img}`}
                alt="wedding image"
                css={style.wImg}
              />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
