/* eslint-disable react/no-unknown-property */
import React from "react";
import { css } from "@emotion/react";

const style = {
  imgDiv: css`
    display: grid;
    grid-template-colums: 1fr;
    grid-template-rows: auto;
    gap: 20px;
    align-items: center;
  `,
};

export default function ImageGroup({ label, images }) {
  return (
    <>
      {/* Story images */}
      <div className="mt-3">
        {/* Event title */}
        <div className="py-5">
          <h1 className="text-center text-white">{label}</h1>
        </div>
        {/* Event images */}
        <div css={style.imgDiv} className="p-3">
          {images.map((image, index) => {
            return (
              <div key={index} className="d-block w-100" style={{"alignSelf": "center"}}>
                <img src={image} alt="event image" className="w-100" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
