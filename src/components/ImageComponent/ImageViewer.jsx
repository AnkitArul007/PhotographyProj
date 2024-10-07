/* eslint-disable react/no-unknown-property */
import { css } from "@emotion/react";
import { IoClose } from "react-icons/io5";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const style = {
  IVMain: css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    background-color: #090909;
    z-index: 9998;
    transition: all 1s ease-in-out;
  `,
  IVInner: css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    z-index: 9999;
  `,
  IVIMageDiv: css`
    position: absolute;
    top: 2%;
    right: 2%;
    bottom: 2%;
    left: 2%;
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: center;
    overflow: hidden;
  `,
  IVImg: css`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  `,
  closeButton: css`
    outline: none;
    border: none;
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    color: #ffffff;
  `,
  prevButton: css`
    outline: none;
    border: none;
    position: absolute;
    left: 0;
    top: 50%;
    color: #ffffff;
  `,
  nextButton: css`
    outline: none;
    border: none;
    position: absolute;
    right: 0;
    top: 50%;
    color: #ffffff;
  `,
};

const ImageViewer = ({
  currentImage,
  handleNext,
  handlePrevious,
  close,
}) => {

  return (
    <div css={style.IVMain}>
      <div css={style.IVInner}>
        <div css={style.IVIMageDiv}>
          <button type="button" css={style.closeButton} onClick={close}>
            <IoClose size={24} color={"#ffffff"} />
          </button>
          <button
            type="button"
            css={style.prevButton}
            onClick={handlePrevious}
          >
            <MdNavigateBefore size={48} />
          </button>
          <img css={style.IVImg} src={currentImage} alt="image" />
          <button
            type="button"
            css={style.nextButton}
            onClick={handleNext}
          >
            <MdNavigateNext size={48} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageViewer;
