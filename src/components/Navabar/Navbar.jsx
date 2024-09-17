/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import navTabsData from "../../database/navbar/navTabsData.json";
import { css } from "@emotion/react";
import "../../App.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { useFetch } from "../../hooks/useFetch";
import useListenScreenSize from "../../hooks/useListenScreenSize";

const Navbar = () => {
  const { screenWidth, suggestImageWidthToTake } = useListenScreenSize();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [mobileDropdownInnerChild, setMobileDropdownInnerChild] =
    useState(false);

  const { data, error, postData, loading } = useFetch();
  useEffect(() => {
    const url = `${import.meta.env.VITE_ROOT_URL}/category/get`;
    postData(url, { w: suggestImageWidthToTake() });
  }, [screenWidth]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  console.log(navTabsData);
  return (
    <React.Fragment>
      <div
        className="d-flex justify-content-between align-items-center navbar-container"
        css={css`
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 60px;
          padding: 40px 50px;
          background: rgba(0, 0, 0, 0.3);
          z-index: 11;
          -webkit-backdrop-filter: saturate(180%) blur(20px);
          backdrop-filter: saturate(180%) blur(20px);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          perspective: 1000;
        `}
      >
        <div
          className="logo d-flex align-items-center"
          css={css`
            background: transparent;
          `}
        >
          <Link
            to="/home"
            css={css`
              text-decoration: none;
              background: transparent;
            `}
          >
            <h2
              className="neon-grad"
              css={css`
                font-family: "Julius Sans One", sans-serif;
                font-weight: bold;
              `}
            >
              RusalkCreation
            </h2>
          </Link>
        </div>

        <div
          className="navigation-tabs-container"
          css={css`
            background: transparent;
            display: none;
            @media (min-width: 990px) {
              display: block;
            }
          `}
        >
          <ul
            css={css`
              display: flex;
              justify-content: start;
              align-items: center;
              list-style: none;
              margin: 0;
              padding: 0;
              font-size: 12px;
              font-weight: bold;
              text-transform: uppercase;
              background: transparent;
            `}
          >
            {navTabsData?.slice(0, 4).map((ele, id) => {
              return (
                <li
                  key={id}
                  css={css`
                    margin-right: 15px;
                    background: transparent;
                  `}
                >
                  <Link
                    to={`/${ele}`}
                    css={css`
                      text-decoration: none;
                      background: transparent;
                    `}
                  >
                    <p
                      className="bg-transparent text-light"
                      css={css`
                        font-family: "Julius Sans One", sans-serif;
                        font-weight: bold;
                        margin: 0;
                        padding: 0;
                      `}
                    >
                      {ele}
                    </p>
                  </Link>
                </li>
              );
            })}
            <li
              css={css`
                // margin-right: 15px;
                position: relative;
                background: transparent;
              `}
            >
              <Link
                to="#"
                css={css`
                  text-decoration: none;
                  background: transparent;
                `}
                onClick={toggleDropdown}
              >
                <p
                  className="text-light bg-transparent"
                  css={css`
                    font-family: "Julius Sans One", sans-serif;
                    font-weight: bold;
                    cursor: pointer;
                    margin: 0;
                    padding: 0;
                  `}
                >
                  Category ▼
                </p>
              </Link>
              {isDropdownOpen && (
                <ul
                  className="dropdown-menu"
                  css={css`
                    position: absolute;
                    top: 200%;
                    right: 0;
                    width: 200px;
                    // height: 200px;
                    height: fit-content;
                    display: block;
                    list-style: none;
                    margin: 0;
                    padding: 10px;
                    background: transparent;
                    z-index: 1;
                    -webkit-backdrop-filter: saturate(180%) blur(20px);
                    backdrop-filter: saturate(180%) blur(20px);
                    -webkit-backface-visibility: hidden;
                    backface-visibility: hidden;
                    perspective: 1000;
                    box-shadow: 0px 0px 7px 0.5px lightgray;
                  `}
                >
                  {data?._data?.data?.map((category) => {
                    return (
                      <li
                        className="bg-transparent"
                        css={css`
                          margin-bottom: 10px;
                        `}
                      >
                        <Link
                          to={`/${category?.id}`}
                          className="bg-transparent"
                          css={css`
                            text-decoration: none;
                            color: white;
                          `}
                        >
                          {category?.category_name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          </ul>
        </div>

        {/* mobile view navbar */}
        <div
          className="mobile-view-navigation-tabs-container bg-transparent position-relative user-select-none"
          css={css`
            height: fit-content;
            width: fit-content;
            @media (min-width: 990px) {
              display: none !important ;
            }
          `}
          onClick={(e) => {
            setMobileDropdownOpen(!mobileDropdownOpen);
            console.log(mobileDropdownOpen);
          }}
        >
          <span
            css={css`
              font-size: 28px;
              background: transparent;

              &:hover {
                cursor: pointer;
              }
            `}
          >
            {/* custom burger icon */}
            <div className="burgerContainer d-flex flex-column gap-2 bg-transparent">
              <div
                css={css`
                  height: 3px;
                  width: 30px;
                  color: white;
                  border: 2px solid white;
                `}
              ></div>
              <div
                css={css`
                  height: 3px;
                  width: 30px;
                  color: white;
                  border: 2px solid white;
                `}
              ></div>
              <div
                css={css`
                  height: 3px;
                  width: 30px;
                  color: white;
                  border: 2px solid white;
                `}
              ></div>
            </div>
          </span>

          <ul
            className="nav-options-cont position-absolute"
            css={css`
              top: 150%;
              right: 0%;
              list-style: none;
              padding: 0;
              min-width: 200px;
              transition: all 1s ease-in-out;
              display: ${mobileDropdownOpen ? "block" : "none"};
            `}
          >
            {navTabsData.slice(0, 4).map((ele, id) => {
              return (
                <Link
                  key={id}
                  to={`/${ele}`}
                  css={css`
                    text-decoration: none;
                  `}
                >
                  <li
                    css={css`
                      background: transparent;
                      // color: #fff;
                      padding: 5px 10px;
                      font-size: 14px;
                      letter-spacing: 1px;
                      transition: all 0.3s ease !important ;

                      &:hover {
                        color: #fff;
                        cursor: pointer;
                      }
                    `}
                  >
                    {ele}
                  </li>
                </Link>
              );
            })}

            <div
              onMouseEnter={(e) => setMobileDropdownInnerChild(true)}
              onMouseLeave={(e) => setMobileDropdownInnerChild(false)}
              className="position-relative"
              css={css`
                background: transparent;
                padding: 5px 10px;
                font-size: 14px;
                letter-spacing: 1px;
                transition: all 0.3s ease !important ;

                &:hover {
                  color: #fff;
                  cursor: pointer;
                }
              `}
            >
              <p
                className="d-flex gap-2"
                css={css`
                  &:hover {
                    color: #fff;
                    cursor: pointer;
                  }
                `}
              >
                <span>◀</span>
                <span>Category</span>
              </p>

              {/* extra cont */}
              <ul
                className="position-absolute"
                css={css`
                  top: 0;
                  left: -100%;
                  list-style: none;
                  min-width: 200px;
                  padding: 0;
                  display: ${mobileDropdownInnerChild ? "block" : "none"};
                `}
              >
                {data?._data?.data?.map((category) => {
                  return (
                    <li
                      className="bg-transparent"
                      css={css`
                        margin-bottom: 10px;
                      `}
                    >
                      <Link
                        to={`/${category?.id}`}
                        className="bg-transparent"
                        css={css`
                          text-decoration: none;
                          color: white;
                        `}
                      >
                        {category?.category_name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
