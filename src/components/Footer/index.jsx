/* eslint-disable react/no-unknown-property */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {BsInstagram, BsYoutube} from 'react-icons/bs'
import {FaFacebookSquare} from 'react-icons/fa'
import {BiCopyright} from 'react-icons/bi';
import {css} from "@emotion/react";

const style = {
  socialIconsDiv: css`
  cursor: pointer;
  `,
  copyRightSpan: css`
  display: inline-block;
  font-size: 14px;
  `,
}


export default function Footer() {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-center p-5">
        <div className="d-flex justify-content-center align-center">
          <div className="mx-2" css={style.socialIconsDiv}>
            <BsInstagram size={25} />
          </div>
          <div className="mx-2" css={style.socialIconsDiv}>
            <BsYoutube size={25} />
          </div>
          <div className="mx-2" css={style.socialIconsDiv}>
            <FaFacebookSquare size={25} />
          </div>
        </div>
        <div className="d-flex align-items-end justify-content-center text-center mt-4 p-3">
          <p css={css`font-size: 14px; align-self: flex-end;`}><span><BiCopyright /></span> 2023 Rushal Creations</p>
        </div>
      </div>
    </>
  )
}
