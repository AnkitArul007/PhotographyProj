import { css } from "@emotion/react";
import BlogInfo from "./BlogInfo";
import BlogImage from "./BlogImage";

const style = {
  blogSection: css`
    width: 100%;
    margin: 0 auto;
    text-align: center;
  `,
  blogContainer: css`
    max-width: 1440px;
    margin: 0 auto;
    padding-top: 48px;
    padding-bottom: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  blogGallery: css`
    padding: 1rem;
  `,
  rule: css`
    color: #fff;
    margin-top: 16px;
    margin-bottom: 16px;
    border-top-width: 2px;
    border-top-style: solid;
    border-image-source: linear-gradient(
      90deg,
      transparent,
      #f81ce5,
      #fff,
      #eb367f,
      transparent 100%
    );
    border-image-slice: 1;
  `,
};

const mockImages = [
  "https://images.squarespace-cdn.com/content/v1/5c9dc168c46f6d4367f37a90/1658503551838-SS4KQM7NDJFQ43QF114T/02_1a+59+OMK09247.jpg",
  "https://images.squarespace-cdn.com/content/v1/5c9dc168c46f6d4367f37a90/1658502514323-NKXZUZHT0C33DM61AAIA/04_1a+103+SOM04066.jpg",
  "https://images.squarespace-cdn.com/content/v1/5c9dc168c46f6d4367f37a90/1658502630691-9ZYZCTB2H92CMGZ4LPO7/06_1a+7+OMK09651.jpg",
  "https://images.squarespace-cdn.com/content/v1/5c9dc168c46f6d4367f37a90/1658504906888-B1AMXG3TET5130NQH8G4/Untitled.jpg",
  "https://images.squarespace-cdn.com/content/v1/5c9dc168c46f6d4367f37a90/1658502577987-9SOUCY0HQPBHWMXTLTND/16_1a+17+SOM04606.jpg"
];

const WeddingBlog = () => {
  return (
    <section css={style.blogSection} className="container">
      <div css={style.blogContainer}>
        {/* blog info */}
        <BlogInfo
          info={{
            bride: "Simran",
            groom: "Harmit",
            date: "September 2023",
            city: "Udaipur",
            country: "India",
          }}
        />

        {/* blog gallery */}

        <div css={style.blogGallery}>
          <hr
            css={style.rule}
          />
          {mockImages.map((image) => (
            <BlogImage src={image} />
          ))}
          <hr css={style.rule} />
        </div>
      </div>
    </section>
  );
};

export default WeddingBlog;
