/* eslint-disable react/no-unknown-property */
import { css } from "@emotion/react";

export default function About () {
  return (
    <>
      <div
        css={css`
          margin-top: 30px;
        `}
      >
        <h1
          css={css`
            text-align: center;
          `}
        >
          About
        </h1>
        <div
          className="testimonial-container"
          css={css`
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            padding: 0 30px;
            @media screen and (max-width: 600px) {
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }
          `}
        >
          <div
            className="profile"
            css={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              width: 50%;
            `}
          >
            <div
              className="profile-image"
              css={css`
                width: 200px;
                height: 200px;
                overflow: hidden;
                border-radius: 50%;
              `}
            >
              <img
                src="/images/profile.png"
                width="100%"
                height="100%"
                alt="profile image"
              />
            </div>
            <div className="profile-intro">
              <h2
                css={css`
                  text-align: center;
                `}
              >
                Raghu Rai
              </h2>
              <p
                css={css`
                  text-align: center;
                `}
              >
                Delhi, India
              </p>
            </div>
          </div>
          <div
            className="content"
            css={css`
              display: flex;
              align-items: center;
              justify-content: center;
              width: 50%;
              padding-left: 20px;
              padding-right: 20px;
            `}
          >
            <div>
              <h3 className="metallic-text-grad">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                sed sapien sed risus ultrices ultrices sed sed sapien sed risus
                ultrices.
              </h3>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
                odit ab velit dolorum facere, voluptatem ea totam dicta,
                reiciendis aliquam.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
