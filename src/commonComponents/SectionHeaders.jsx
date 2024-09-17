/* eslint-disable react/no-unknown-property */
import React from "react";
import { css } from "@emotion/react";

const SectionHeaders = ({ pagetitle }) => {
  return (
    <React.Fragment>
      <header className="d-flex justify-content-center">
        <h2 className="neon-grad p-2" css={style.header}>
          {pagetitle}
        </h2>
      </header>
    </React.Fragment>
  );
};

export default SectionHeaders;

const style = {
  header: css`
    text-align: center;
    font-family: "Monoton", cursive;
    font-size: var(--large-text);
    letter-spacing: 5px;
    text-transform: capitalize;

    @media (max-width: 480px) {
      font-size: var(--mid-text);
    }
  `,
};
