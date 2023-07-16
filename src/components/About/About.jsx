/* eslint-disable react/no-unknown-property */
import React from "react";
import { css } from "@emotion/react";

const style = {
  mainDiv: css`
    width: 100%;
    height: 480px;
    background: url("/images/about_image.jpg");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    margin: 18px 0;
  `,
  profileDiv: css`
    display: flex;
    justify-content: between;
    width: 100%;
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
  `,
  profileImageDiv: css`
    flex: 0.4;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  profileImage: css`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
  `,
  aboutInfoDiv: css`
    flex: 0.6;
    padding: 16px 28px;
    // font-family: 'VT323', monospace !important;
    font-family: 'Julius Sans One', sans-serif;
  `,
  titleHeading: css`
    font-weight: 600;
    letter-spacing: 4px;
    text-align: left;
    color: #fff;
    font-family: 'Julius Sans One', sans-serif;
  `,
  aboutTextDiv: css`
    padding-top: 28px;
    text-align: left;
    p {
      color: #fff;
      background: transparent;
    }
  `,
  aboutText: css`
    font-size: 12px;
    line-height: 200%;
    font-family: 'Julius Sans One', sans-serif;
  `,
};

export default function About1() {
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
              <h1 css={style.titleHeading}>Rajdeep Rathore</h1>
              <h3 
              css={css`text-align: left; color: #fff; font-family: 'Julius Sans One', sans-serif;`}
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
                non quibusdam incidunt laudantium placeat excepturi. Quia enim
                ad reiciendis facere amet aspernatur neque eius eum vitae esse
                officiis sunt aliquam odit nihil, perspiciatis possimus cum
                dolores aliquid nam ullam dolorum nesciunt iusto cupiditate.
                Beatae, eos ratione provident iusto sint neque perferendis animi
                et expedita ab ipsa esse temporibus consequuntur dolor repellat,
                numquam maiores natus sed magnam quaerat odit?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
