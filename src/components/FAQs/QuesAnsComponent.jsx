/* eslint-disable react/no-unknown-property */
import React from "react";
import { css } from "@emotion/react";
import {BsTriangle} from "react-icons/bs"

const style = {
  contentDiv: css`
    display: flex;
    flex-direction: column;
    border-block: 0.1rem solid;
    border-inline-end: 0.1rem solid;
    border-inline-start: 0.1rem solid;
    border-image-source: linear-gradient(90deg, #f81ce5, #7928ca, #eb367f);
    border-image-slice: 1;
    padding: 2rem;
    width: 100%;
    transition: height 0.3s;
  `,
  triangleIconDiv: css`
    cursor: pointer;
    display: inline-block;
    transition: linear 0.3s;
    &:hover {
        transform: rotate(180deg);
    }
  `,
  answerPara: css`
    white-space: pre-wrap;
    display: none;
    `,
};

// eslint-disable-next-line react/prop-types
const QuesAnsComponent = ({ question, answer }) => {
    const [showAns, setShowAns] = React.useState(false);
  return (
    <>
      <div css={style.contentDiv}>
        {/* question container */}
        <div className="d-flex align-items-center justify-content-between">
          <p className="fs-4">
            <strong>{question}</strong>
          </p>
          <div css={style.triangleIconDiv} onMouseEnter={() => setShowAns(true)} onMouseLeave={() => setShowAns(false)} >
            <span><BsTriangle size={20} /></span>
          </div>
        </div>
        <p 
        className="fs-5 answerParagraph"
        css={css`
        white-space: pre-wrap;
        display: ${showAns? "inline-block" : "none"};
        `}>
          {answer}
        </p>
      </div>
    </>
  );
};

export default QuesAnsComponent;
