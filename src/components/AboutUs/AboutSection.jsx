/* eslint-disable react/no-unknown-property */
import { css } from "@emotion/react";

const style = {
  aboutSection: css`
    margin: 0 auto;
    margin-top: 100px;
    margin-bottom: 98px;

    @media (max-width: 768px) {
    margin-top: 60px;
    margin-bottom: 54px;
    }
  `,
  aboutInfoDiv: css`
    max-width: 1040px;
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-wrap: wrap-reverse;
    align-items: center;
    justify-content: center;

    @media (max-width: 820px) {
      flex-direction: column-reverse;
    }
  `,
  aboutLeft: css`
    width: 50%;

    @media (max-width: 820px) {
      width: 80%;
    }
  `,
  LeftInner: css`
    margin: 0 48px 0 0;
    @media (max-width: 1020px) {
      margin: 0 36px 0 0;
    }
    @media (max-width: 820px) {
      margin: 24px 0 0 0;
    }
  `,
  aboutHeading: css`
    font-weight: 700;
    line-height: 1.4em;
    font-size: 44px;
    text-align: center;
    @media (max-width: 568px) {
      font-size: 30px;
    }
  `,
  aboutTextDiv: css`
    width: 100%;
  `,
  aboutTextPara: css`
    line-height: 1.5em;
    font-size: 15px;
    text-align: center;
    @media (max-width: 568px) {
      text-align: justify;
      font-size: 14px;
    }
  `,
  aboutRight: css`
    width: 50%;
    margin: 0;
    padding: 0;
    @media (max-width: 820px) {
      width: 80%;
    }
  `,
  aboutImageDiv: css`
    width: 100%;
    height: 100%;
    max-height: 300px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
  `,
};

const AboutSection = () => {
  return (
    <section css={style.aboutSection}>
      <div
        css={css`
          margin-bottom: 24px;
        `}
      >
        <h2 css={style.aboutHeading}>Welcome to Rusalk Creation</h2>
      </div>
      <div css={style.aboutInfoDiv}>
        <div css={style.aboutLeft}>
          <div css={style.LeftInner}>
            {/* <div
              css={css`
                margin-bottom: 16px;
              `}
            >
              <h2 css={style.aboutHeading}>Welcome to Rusalk Creation</h2>
            </div> */}
            <div css={style.aboutTextDiv}>
              <p css={style.aboutTextPara}>
                Rusalk Creation is a dynamic photography & filmmaking company
                specializing in capturing the magic of weddings through stunning
                visuals and cinematic storytelling. With a passion for
                preserving cherished moments, they also excel in pre-weddings,
                birthday parties, maternity shoots, corporate events, model
                portfolios, product photography, sports, advertisements, music
                videos, films, and documentaries. Their highly skilled team of
                photographers and filmmakers delivers high-quality, customized
                experiences for clients, ensuring every occasion is beautifully
                documented. Rusalk Creation blends creativity, technical
                expertise, and meticulous attention to detail, making them a
                versatile choice for all photography and filmmaking needs.
              </p>
            </div>
          </div>
        </div>

        <div css={style.aboutRight}>
          <div css={style.aboutImageDiv}>
            <img src="https://imagedelivery.net/ETcXcLWKuHAK7leb3ufefw/017a2995-ae10-4575-e5ef-8830b890bb00/w=800,f=webp" alt="ruslak-creation" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
