import { css } from "@emotion/react";

const style = {
  spinnerContainer: css`
    width: 100%;
    height: 90vh;
    display: grid;
    place-items: center;
  `,
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
  inner: css`
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
  `,
};

const Spinner = () => {
  return (
    <div css={style.spinnerContainer}>
      <div css={style.spinner}>
        <div css={style.inner}></div>
      </div>
    </div>
  );
};

export default Spinner;
