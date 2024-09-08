/* eslint-disable react/no-unknown-property */
import React from "react";
import { css } from "@emotion/react";

const style = {
  mainDiv: css`
    width: 100%;
    height: auto;
    background: url("/images/about_image.jpg");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    margin: 18px 0;
  `,
  profileDiv: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    max-width: 1520px;
    width: 100%;
    margin: 0 auto;
    height: 100%;
    background: transparent;
    padding: 28px;
    div {
      background: transparent;
    }
    div h1,
    h3 {
      background: transparent;
    }
    @media (max-width: 600px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  `,
  profileImageDiv: css`
    flex-shrink: 0;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 600px) {
      width: 200px;
      height: 200px;
    }
  `,
  profileImage: css`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    @media (max-width: 600px) {
      width: 200px;
      height: 200px;
    }
  `,
  aboutInfoDiv: css`
    padding: 1rem;
    font-family: 'Julius Sans One', sans-serif;
  `,
  titleHeading: css`
    font-weight: 600;
    letter-spacing: 4px;
    text-align: left;
    color: #fff;
    font-family: 'Julius Sans One', sans-serif;
    @media (max-width: 600px){
      text-align: center;
    }
    `,
  titlePosition: css`
  text-align: left;
  color: #fff;
  font-family: 'Julius Sans One', sans-serif;
  @media (max-width: 600px) {
    text-align: center;
  }
  `,
  aboutTextDiv: css`
    padding-top: 28px;
    text-align: left;
    p {
      color: #fff;
      background: transparent;
    }
    @media (max-width: 600px) {
      text-align: center;
    }
  `,
  aboutText: css`
  margin: 0;
    font-size: 12px;
    line-height: 200%;
    font-family: 'Julius Sans One', sans-serif;
  `,
};

export default function About() {
  return (
    <>
      {/* main division */}
      <div css={style.mainDiv}>
        {/* profile container div */}
        <div css={style.profileDiv}>
          {/* profile image div */}
          <div css={style.profileImageDiv}>
            <img css={style.profileImage} src="/images/profile.png" alt="propfile-image" srcSet="" />
          </div>
          {/* profile info div */}
          <div css={style.aboutInfoDiv}>
            {/* name and position */}
            <div>
              <h1 css={style.titleHeading}>Siddharth Gupta</h1>
              <h3 
              css={style.titlePosition}
              >
                Creative Director
              </h3>
            </div>
            {/* about text */}
            <div css={style.aboutTextDiv}>
              <p css={style.aboutText}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
                voluptate voluptas. Ipsum perspiciatis delectus fugiat magni
                assumenda, laudantium excepturi, qui, modi sit veniam at
                possimus. Molestias repellendus neque eos architecto error natus
                autem, consectetur enim fuga ducimus nulla! Asperiores iste vel
                non quibusdam incidunt laudantium placeat excepturi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
