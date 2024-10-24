/* eslint-disable react/no-unknown-property */
import { css } from "@emotion/react";
import SectionHeaders from "../../commonComponents/SectionHeaders";
import Services from "./Services";
import AboutSection from "./AboutSection";

const AboutUs = () => {
  return (
    <div css={style.aboutMain}>
      <div css={style.topBg}></div>
      <SectionHeaders pagetitle={"About Us"} />
      <div css={style.aboutContainer}>
        <AboutSection />
      </div>
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
    background-image: url("https://imagedelivery.net/ETcXcLWKuHAK7leb3ufefw/0fc29308-c384-4c90-404b-3e25510d0000/w=1400,f=webp");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  `,
};
