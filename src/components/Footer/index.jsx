import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {BsInstagram, BsYoutube} from 'react-icons/bs'
import {FaFacebookSquare} from 'react-icons/fa'

const style= {
  "cursor": "pointer"
}

export default function Footer() {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-center p-5">
        <div className="d-flex justify-content-center align-center">
          <div className="mx-2" style={style}>
            <BsInstagram size={25} />
          </div>
          <div className="mx-2" style={style}>
            <BsYoutube size={25} />
          </div>
          <div className="mx-2" style={style}>
            <FaFacebookSquare size={25} />
          </div>
        </div>
        <div className="text-center">
          <p><span className="me-1">&copy; 2023</span>Rushal Creations</p>
        </div>
      </div>
    </>
  )
}
