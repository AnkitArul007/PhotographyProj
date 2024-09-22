/* eslint-disable react/no-unknown-property */
import { css } from "@emotion/react";
import SectionHeaders from "../../commonComponents/SectionHeaders";
import Services from "./Services";

const AboutUs = () => {
  return (
    <div css={style.aboutMain}>
      <div css={style.topBg}></div>
      <SectionHeaders pagetitle={"About Us"} />
      <div css={style.aboutContainer}></div>

      {/* about us section */}
      <section css={style.aboutSection}>
        <div css={style.aboutInfoDiv}>
          <div css={style.aboutLeft}>
            <div css={style.LeftInner}>
              <div
                css={css`
                  margin-bottom: 16px;
                `}
              >
                <h2 css={style.aboutHeading}>Welcome to Rusalk Creation</h2>
              </div>
              <div css={style.aboutText}>
                <p css={style.aboutTextPara}>
                Rusalk Creation is a dynamic photography and filmmaking company specializing in capturing the magic of weddings through stunning visuals and cinematic storytelling. With a passion for preserving cherished moments, they also excel in pre-weddings, birthday parties, maternity shoots, corporate events, model portfolios, product photography, sports, advertisements, music videos, films, and documentaries. Their highly skilled team of photographers and filmmakers delivers high-quality, customized experiences for clients, ensuring every occasion is beautifully documented. Rusalk Creation blends creativity, technical expertise, and meticulous attention to detail, making them a versatile choice for all photography and filmmaking needs.
                </p>
              </div>
            </div>
          </div>

          <div css={style.aboutRight}>
            <div css={style.aboutImageDiv}>
              <img src="/images/aboutUsService.jpg" alt="ruslak-creation" />
            </div>
          </div>
        </div>
      </section>

      {/* services */}
      <Services />
    </div>
  );
};

export default AboutUs;

const style = {
  aboutMain: css`
    width: 100%;
    margin: 0 auto;
  `,
  aboutContainer: css`
    width: 100%;
    max-width: 1520px;
    margin: 0 auto;
    padding: 0;
  `,
  topBg: css`
    height: 400px;
    overflow: hidden;
    margin-bottom: 58px;
    width: 100%;
    background-image: url("/images/lm.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  `,
  aboutSection: css`
    margin: 0 auto;
    margin-top: 100px;
    margin-bottom: 98px;
  `,
  aboutInfoDiv: css`
    max-width: 1040px;
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-wrap: wrap-reverse;
    align-items: center;
    justify-content: center;
  `,
  aboutLeft: css`
    width: 50%;
  `,
  LeftInner: css`
    margin: 0 54px 0 0;
  `,
  aboutHeading: css`
    font-weight: 700;
    line-height: 1.4em;
    font-size: 44px;
    text-align: center;
  `,
  aboutTextDiv: css`
    width: 100%;
  `,
  aboutTextPara: css`
    line-height: 1.5em;
    font-size: 15px;
    text-align: center;
  `,
  aboutRight: css`
    width: 50%;
    margin: 0;
    padding: 0;
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
