/* eslint-disable react/no-unknown-property */
import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { BiCopyright } from "react-icons/bi";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <React.Fragment>
      <section css={style.section} className="mt-5 py-3">
        <div className="container position-relative" css={style.container}>
          <div className="col1">
            <h3 className="neon-grad fs-1">Rushal Creation</h3>
            <p>49, Image Garderns,</p>
            <p>By-pass road</p>
            <p>Bhagalpur, Bihar- 812001</p>
          </div>

          <div className="col2">
            <h3>Services</h3>
            {services.map((ele, id) => {
              return (
                <p key={id}>
                  <Link
                    to={ele.url}
                    css={css`
                      text-decoration: none;
                    `}>
                    <span css={style.links}>{ele.name}</span>
                  </Link>
                </p>
              );
            })}
          </div>

          <div className="col3">
            <h3>Quick links</h3>
            {quickLinks.map((ele, id) => {
              return (
                <p key={id}>
                  <Link
                    to={ele.url}
                    css={css`
                      text-decoration: none;
                    `}>
                    <span css={style.links}>{ele.name}</span>
                  </Link>
                </p>
              );
            })}
          </div>

          <div className="col4">
            <h3>Follow us</h3>
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
        </div>

        <div className=" text-center py-3" css={style.border}>
          <p css={style.text}>&copy;Rushal Creation All rights reserved.</p>
          <p css={css`
          font-size: 10px;
          font-family: "Julius Sans One", sans-serif;
          `}>Designed and developed by - Ankit Arul and Rajdeep Rathore</p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Footer;

const services = [
  {
    name: "option 1",
    url: "#",
  },
  {
    name: "option 2",
    url: "#",
  },
  {
    name: "option 3",
    url: "#",
  },
  {
    name: "option 4",
    url: "#",
  },
];
const quickLinks = [
  {
    name: "about us",
    url: "#",
  },
  {
    name: "partner with us",
    url: "#",
  },
];

const style = {
  section: css`
    width: 100%;
    height: fit-content;
  `,
  container: css`
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    div {
      h3 {
        font-family: "Julius Sans One", sans-serif;
        font-weight: bold;
        margin-bottom: 20px;
      }
      p {
        font-size: 12px;
        font-family: "Julius Sans One", sans-serif;
      }
    }
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
    socialmediaIcons: css`
    display: flex;
    gap: 10px;
    font-size: 18px;
    `,
    text: css`
    font-family: "Julius Sans One", sans-serif;
    font-size: 14px;
  `,
  border: css`
  border-block-start: 1.5px solid;
  border-image-source: linear-gradient(90deg, transparent, #f81ce5, #7928ca, #eb367f, transparent 100%);
  border-image-slice: 1;
  `
};
