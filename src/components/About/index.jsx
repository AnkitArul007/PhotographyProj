/* eslint-disable react/no-unknown-property */
import { css } from "@emotion/react";


const style = {
  profileImageDiv: css`
  width: 200px;
  height: 200px;
  // border-radius: 50%;
  object-fit: contain; 
  `,
  profileImage: css`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  `,
}

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

          {/* profile container */}
          <div
            css={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              width: 50%;
            `}
          > 
          {/* profile image conatainer */}
            <div
              css={style.profileImageDiv}
            >
              <img
              css={style.profileImage}
                src="/images/profile.png"
                width="100%"
                height="100%"
                alt="profile image"
              />
            </div>

            {/* Progile intor div */}
            <div>
              <h2 css={css`text-align: center;`}>Raghu Rai</h2>
              <p
                css={css`
                  text-align: center;
                `}
              >
                Delhi, India
              </p>
            </div>
          </div>

          {/* About text container */}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
