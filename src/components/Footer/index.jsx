/* eslint-disable react/no-unknown-property */
import { css } from "@emotion/react";
import FooterLink from "./FooterLink";
import SocialMediaLinks from "./SocialMediaLinks";

const Footer = () => {
  return (
    <section css={style.section} className="mt-5 py-3">
      <div css={style.container} className="container">
        <div css={style.rushalk}>
          <h3 className="neon-grad fs-1">Rusalk Creation</h3>
          <p>Rusalk Creation Studio,</p>
          <p>Behind Shivam Aryan Fuel Services</p>
          <p>Before new St. Teresa School</p>
          <p>Bypass Road</p>
          <p>Bhagalpur, Bihar- 812001</p>
        </div>

        {/* services */}
        {/* <FooterLink
          linkHeading={"Services"}
          links={[
            { address: "#", name: "Service1" },
            { address: "#", name: "Service2" },
            { address: "#", name: "Service3" },
            { address: "#", name: "Service4" },
          ]}
        /> */}

        <FooterLink
          linkHeading={"Quick Links"}
          links={[
            { address: "/about-us", name: "About Us" },
            { address: "/contact", name: "Contact Us" },
          ]}
        />

        <SocialMediaLinks />
      </div>

      <div className="text-center py-3" css={style.border}>
        <p css={style.text}>&copy;Rusalk Creation All rights reserved.</p>
        <p
          css={css`
            font-size: 10px;
            font-family: "Julius Sans One", sans-serif;
          `}
        >
          Designed and developed by - Ankit Arul and Rajdeep Rathore
        </p>
      </div>
    </section>
  );
};

export default Footer;

const style = {
  section: css`
    width: 100%;
    height: fit-content;
  `,
  divMain: css`
    width: 100%;
    margin: 0 auto;
  `,
  container: css`
    margin: 0 auto;
    padding: 0;
    display: grid;
    justify-content: space-between;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto;
    gap: 1rem;
    margin-bottom: 50px;

    @media (max-width: 600px) {
      padding: 0 2rem;
      grid-template-columns: auto auto;
    }
    @media (max-width: 360px) {
      grid-template-columns: auto;
    }
  `,
  rushalk: css`
    h3 {
      font-family: "Julius Sans One", sans-serif;
      font-weight: bold;
      margin-bottom: 20px;
    }
    p {
      font-size: 12px;
      font-family: "Julius Sans One", sans-serif;
    }
  `,

  border: css`
    border-block-start: 1.5px solid;
    border-image-source: linear-gradient(
      90deg,
      transparent,
      #f81ce5,
      #7928ca,
      #eb367f,
      transparent 100%
    );
    border-image-slice: 1;

    @media (max-width: 768px) {
      border-width: 1px;
    }
  `,
  text: css`
    font-family: "Julius Sans One", sans-serif;
    font-size: 14px;
  `,
};
