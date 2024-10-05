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
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    max-width: 1520px;
    width: 100%;
    margin: 24px auto;
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
    font-family: "Julius Sans One", sans-serif;
  `,
  titleHeading: css`
    font-weight: 600;
    letter-spacing: 4px;
    text-align: center;
    color: #fff;
    font-family: "Julius Sans One", sans-serif;
    @media (max-width: 600px) {
      text-align: center;
    }
  `,
  titlePosition: css`
    text-align: center;
    color: #fff;
    font-family: "Julius Sans One", sans-serif;
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
    font-family: "Julius Sans One", sans-serif;
    font-weight: 400;
    font-size: 14px;
    // word-spacing: 1px;
    letter-spacing: 0.5px;
    text-align: justify;
    line-height: 2;
    @media (max-width: 480px) {
      font-size: 12px;
      line-height: 1.8;
    }
  `,
};

export default function About() {
  return (
    <>
      <div css={style.mainDiv}>
        <div css={style.profileDiv}>
          <div css={style.profileImageDiv}>
            <img
              css={style.profileImage}
              src="/images/rk_profileimage.jpg"
              alt="propfile-image"
              srcSet=""
            />  
          </div>
          <div css={style.aboutInfoDiv}>
            <div>
              <h1 css={style.titleHeading}>Rusalk Anand</h1>
              <h3 css={style.titlePosition}>Director & Founder</h3>
            </div>
            <div css={style.aboutTextDiv}>
              <p css={style.aboutText}>
                A passionate storyteller, filmmaker, writer, photographer, and
                cinematographer, Anand&apos;s creative vision has brought numerous
                narratives to life. From the outset of his career, he embraced
                the art of filmmaking, driven by a deep love for visual
                storytelling and a profound appreciation for the transformative
                power of cinema. With over 15 years of experience in the film
                and television industry, his journey began with a focus on
                [specific areas of expertise, e.g., direction, cinematography,
                screenwriting], quickly evolving into a versatile filmmaker
                skilled in multiple facets of production.

                
                In addition to his roles as director, associate director, and
                director of photography, Anand also takes on the
                responsibilities of producer for various films, short films,
                music videos, and documentaries. Anand serves as the official
                chief photographer for Star Sports, capturing the excitement of
                major sporting events, including the IPL, Kabaddi, Futsal, TNPL,
                badminton, snooker, advertisement films, and corporate events.
                His ability to connect with audiences through compelling
                narratives has made him a sought-after talent in the industry.

                
                Throughout his career, Anand has collaborated with various
                production houses and independent filmmakers, gaining invaluable
                insights and refining his craft. His films have been recognized
                at numerous film festivals, celebrated for their innovative
                storytelling and striking visuals. What sets Anand apart is his
                unique ability to blend creativity with technical expertise.
                With 15 years of experience in wedding films, he has crafted
                stories that deeply resonate with viewers, believing that every
                frame tells a story.

                
                In addition to his filmmaking endeavors, Anand is dedicated to
                mentoring emerging filmmakers, sharing his knowledge, and
                fostering a community of passionate creators. With a commitment
                to pushing artistic boundaries, he continues to explore new
                horizons in the ever-evolving landscape of cinema.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
