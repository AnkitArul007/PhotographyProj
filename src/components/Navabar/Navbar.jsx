/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react"
import { Link } from "react-router-dom"
import navTabsData from '../../database/navbar/navTabsData.json'
import { css } from "@emotion/react"
import '../../App.css'

const Navbar = () => {
  console.log(navTabsData)
  return (
    <React.Fragment>
      <div className="d-flex justify-content-between align-items-center navbar-container"
      css={css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 60px;
      padding: 40px 50px;
      background: rgba(0, 0, 0, 0.5);
      z-index: 11;
      -webkit-backdrop-filter: saturate(180%) blur(5px);
      backdrop-filter: saturate(180%) blur(5px);
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      perspective: 1000;
      `}
      >
        <div className="logo d-flex align-items-center"
        css={css`
        background: transparent;
        `}
        >
          <Link to="/home" css={css`text-decoration: none; background: transparent;`}>
            <h2 
            className="neon-grad" 
            css={css`
            font-family: 'Julius Sans One', sans-serif;
            font-weight: bold;
            `}
            >
              Rushal Creation
            </h2>
          </Link>
        </div>

        <div className="navigation-tabs-container"
        css={css`
        background: transparent;
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
            {navTabsData?.slice(0,7).map((ele, id)=>{
              return  (
                <li key={id} css={css`margin-right: 15px; background: transparent;`}>

                  <Link to={`/${ele}`} css={css`text-decoration: none; background: transparent; `}>
                    <p className="metallic-text-grad"
                    css={css`
                    font-family: 'Julius Sans One', sans-serif;
                    font-weight: bold;
                    `}
                    >
                      {ele}
                    </p>
                  </Link>
                </li>
              )
            })}
            <li css={css`margin-right: 15px; background: transparent;`}>
            
                  <Link to="#" css={css`text-decoration: none; background: transparent; `}>
                    <p 
                    className="metallic-text-grad"
                    css={css`
                    font-family: 'Julius Sans One', sans-serif;
                    font-weight: bold;
                    
                    `}
                    >connect ▼</p>
                  </Link>
                </li>
            </ul>
          
        </div>
      </div>
    </React.Fragment>
  )
}

export default Navbar