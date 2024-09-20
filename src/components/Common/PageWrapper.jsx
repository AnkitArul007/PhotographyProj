/* eslint-disable react/no-unknown-property */
import { css } from "@emotion/react";

const PageWrapper = ({ children, isLoading }) => {
  if (isLoading) {
    return (
      <div
        css={css`
          width: 100%;
          height: 90vh;
          display: grid;
          place-items: center;
        `}
      >
        <div css={style.spinner}>
          <div css={style.spinner1}></div>
        </div>
      </div>
    );
  }
  return <div className="container py-5">{children}</div>;
};

export default PageWrapper;

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
