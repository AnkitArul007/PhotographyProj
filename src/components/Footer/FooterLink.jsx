/* eslint-disable react/no-unknown-property */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const FooterLink = ({ linkHeading, links }) => {
  return (
    <div css={style.linksMain}>
      <h3 css={style.LinkHeading}>{linkHeading}</h3>
      {links?.map((link, idx) => (
        <ul key={`${link.address}${idx}`} css={style.linksList}>
          <li>
            <Link to={`${link.address}`} css={style.link}>
              {link.name}
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default FooterLink;

const style = {
  linksMain: css``,
  linksList: css`
    list-style: none;
    padding-left: 0;
  `,
  LinkHeading: css`
    font-family: "Julius Sans One", sans-serif;
    font-weight: bold;
    margin-bottom: 20px;
  `,
  link: css`
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
