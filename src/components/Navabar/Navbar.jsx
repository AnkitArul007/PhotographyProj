/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react"
import { Link } from "react-router-dom"
import "./navbar.css"

const Navbar = ({name}) => {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-between align-items-center navbar-container px-5">
        <div className="logo d-flex align-items-center">
          <Link to="/">
            <img src="https://cdn.pixabay.com/photo/2016/09/14/20/50/tooth-1670434_1280.png" width={"100px"} height={"60px"} alt="logo" />
          </Link>
        </div>

        <div className="navigation-tabs-container">
          <p>{name}</p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Navbar