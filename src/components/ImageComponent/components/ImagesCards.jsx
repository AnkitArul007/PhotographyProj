/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import { css } from "@emotion/react";
import { IKImage, IKContext } from "imagekitio-react";

const ImagesCards = ({ showImageView, imageId, url }) => {
  const [translateFlag, setTranslateFlag] = useState(false);
  return (
    <React.Fragment>
      <div
        className=" p-0 d-flex align-items-center justify-content-center position-relative"
        css={css`
          width: fit-content;
          width: 220px;
          height: fit-content;
          height: 220px;
          border-radius: 5px;
          border-inline-start: 1px solid;
          border-block-start: 1px solid;
          border-inline-end: 1px solid;
          border-block-end: 1px solid;
          border-image-source: linear-gradient(
            270deg,
            #f81ce5,
            #7928ca,
            #eb367f,
            #d4d4d4 93%
          );
          border-image-slice: 1;
          overflow: hidden;
        `}
        onMouseEnter={() => setTranslateFlag(true)}
        onMouseLeave={() => setTranslateFlag(false)}
      >
        <IKContext
          className="imageCont"
          urlEndpoint={"https://ik.imagekit.io/7snzcosbh"}
        >
          <IKImage
            src={url}
            alt={"rc-images"}
            lqip={{ active: true, quality: 20, blur: 10 }}
            width={"180px"}
            height={"180px"}
            onClick={() => showImageView(imageId)}
            css={css`
              object-fit: cover;
              object-position: center;
              border-radius: 3px;
              transition: all 0.5s;
              &:hover {
                cursor: pointer;
                transform: scale(1.1);
                filter: brigthness(1.5);
                -webkit-backdrop-filter: brightness(1.2);
                backdrop-filter: brightness(1.2);
              }
            `}
          />
        </IKContext>

        <div
          className="position-absolute"
          css={css`
            bottom: 0;
            width: 100%;
            height: 30px;
            z-index: 1;
            text-align: center;
            display: grid;
            place-items: center;
            background: transparent;
            transition: all 0.5s;
            transform: ${translateFlag ? "translateY(0)" : "translateY(30px)"};
          `}
        >
          <p className="m-0 bg-transparent neon-grad fs-4 fw-semibold">
            Rushal Creations
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ImagesCards;
