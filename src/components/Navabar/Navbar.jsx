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
      <div className="d-flex justify-content-between align-items-center navbar-container p-5 border border-danger">
        <div className="logo d-flex align-items-center">
          <Link to="/home">
            <h2>Rushal Creation</h2>
          </Link>
        </div>

        <div className="navigation-tabs-container">
            <ul
            css={css`
              display: flex;
              justify-content: start;
              align-items: center;
              list-style: none;
              margin: 0;
              padding: 0;
              font-size: 16px;
              text-transform: uppercase;
            `}
            >
            {navTabsData?.slice(0,7).map((ele, id)=>{
              return  (
                <li key={id} css={css`margin-right: 15px;`}>
                  <Link to={`/${ele}`} css={css`text-decoration: none;`}>
                    <p className="metallic-text-grad">{ele}</p>
                  </Link>
                </li>
              )
            })}
            <li css={css`margin-right: 15px;`}>
                  <Link to="#" css={css`text-decoration: none;`}>
                    <p className="metallic-text-grad">connect ▼</p>
                  </Link>
                </li>
            </ul>
          
        </div>
      </div>
    </React.Fragment>
  )
}

export default Navbar