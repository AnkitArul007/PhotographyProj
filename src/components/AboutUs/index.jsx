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
                  Lorem ipsum dolor sit amet, pro ei justo mnesarchum, ad partem
                  epicurei quo, iusto errem no cum. Idque minim his ut. Ut cum
                  legendos similique, quo an tantas aliquip graecis. Nec et
                  consul voluptatum, mel ex solum facete consequat. Cu eos
                  lucilius gubergren, ad sale definitionem his.
                </p>
              </div>
            </div>
          </div>

          <div css={style.aboutRight}>
            <div css={style.aboutImageDiv}>
              <img src="/images/w2.jpg" alt="ruslak-creation" />
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
    background-image: url("/images/top-bg.jpg");
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
    max-width: 1040px;;
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
    font-size: 48px;
  `,
  aboutTextDiv: css`
    width: 100%;
  `,
  aboutTextPara: css`
    line-height: 1.7em;
    font-size: 16px;
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
