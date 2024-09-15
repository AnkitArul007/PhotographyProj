/* eslint-disable react/no-unknown-property */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const SocialMediaLinks = () => {
  return (
    <div>
      <h3
        css={css`
          font-family: "Julius Sans One", sans-serif;
          font-weight: bold;
          margin-bottom: 20px;
        `}
      >
        Follow us
      </h3>
      <div className="social-media-icons" css={style.socialmediaIcons}>
        <Link>
          <span className="fs-3" css={style.links}>
            <AiFillInstagram />
          </span>
        </Link>
        <Link>
          <span className="fs-3" css={style.links}>
            <FaFacebookF />
          </span>
        </Link>
        <Link>
          <span className="fs-3" css={style.links}>
            <AiFillYoutube />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SocialMediaLinks;

const style = {
  socialmediaIcons: css`
    display: flex;
    gap: 10px;
    font-size: 18px;
    justify-content: start;
  `,
  links: css`
    font-family: "Julius Sans One", sans-serif;
    text-decoration: none;
    font-size: 12px;
    color: #999;
    transition: all 0.2s ease-in-out;
    text-transform: capitalize;

    &:hover {
      cursor: pointer;
      color: #fff;
    }
  `,
};