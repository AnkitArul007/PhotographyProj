/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */
import React from "react";
import { css } from "@emotion/react";
import { imgData } from "./imgData";

const style = {
  // mainHeading: css`
  //   background-color: var(--h1-size);
  // `,
  // imgGrid: css`
  //   columns: 4;
  //   column-gap: 10px;
  // `,
  // imageDiv: css`
  //   width: 250px;
  //   margin-bottom: 10px;
  //   border-radius: 4px;
  //   break-inside: avoid;
  // `,
  // wImg: css`
  //   width: 100%;
  //   object-fit: contain;
  //   `,
  imgGrid: css`
    // display: grid;
    // grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    // grid-tempalate-rows: auto;
    // grid-auto-flow: dense;
    column: 4 250px;
    `,
  imageDiv: css`
    max-width: 250px;
    height: min-content;
    padding: 8px;
    break-inside: avoid;
  `,
  wImg: css`
    width:100%;
  `,
};

export default function Images() {
  return (
    <>
      <div className="container">
        <div>
          <h1 className="metallic-text-grad text-center pb-5">IMAGES</h1>
        </div>
        <div css={style.imgGrid}>
          {/* {imgData.map((item, index) => {
            return (
              <div key={index} css={style.imageDiv}>
                <img
                src={`images/${item.img}`}
                alt="wedding image"
                css={style.wImg}
              />
              </div>
            );
          })} */}
            <div css={style.imageDiv}>
                <img
                src="images/img1.png"
                alt="wedding image"
                css={style.wImg}
              />
            </div>
            <div css={style.imageDiv} css={css`grid-column: span 2`}>
                <img
                src="images/img2.png"
                alt="wedding image"
                css={style.wImg}
              />
            </div>
            <div css={style.imageDiv}>
                <img
                src="images/img3.png"
                alt="wedding image"
                css={style.wImg}
              />
            </div>
            <div css={style.imageDiv}>
                <img
                src="images/img4.png"
                alt="wedding image"
                css={style.wImg}
              />
            </div>
            <div css={style.imageDiv} css={css`grid-row: span 2;`}>
                <img
                src="images/img5.png"
                alt="wedding image"
                css={style.wImg}
              />
            </div>
            <div css={style.imageDiv}>
                <img
                src="images/img6.png"
                alt="wedding image"
                css={style.wImg}
              />
            </div>
            <div css={style.imageDiv}>
                <img
                src="images/img7.png"
                alt="wedding image"
                css={style.wImg}
              />
            </div>
            <div css={style.imageDiv}>
                <img
                src="images/img9.png"
                alt="wedding image"
                css={style.wImg}
              />
            </div>
            <div css={style.imageDiv}>
                <img
                src="images/img8.png"
                alt="wedding image"
                css={style.wImg}
              />
            </div>
            <div css={style.imageDiv}>
                <img
                src="images/img7.png"
                alt="wedding image"
                css={style.wImg}
              />
            </div>
            <div css={style.imageDiv}>
                <img
                src="images/img9.png"
                alt="wedding image"
                css={style.wImg}
              />
            </div>
            <div css={style.imageDiv}>
                <img
                src="images/img8.png"
                alt="wedding image"
                css={style.wImg}
              />
            </div>
        </div>
      </div>
    </>
  );
}
