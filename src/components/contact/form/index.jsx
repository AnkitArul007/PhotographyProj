/* eslint-disable react/no-unknown-property */
import React from "react";
import { css } from "@emotion/react";

const style = {
  formDiv: css`
    width: 100% !important;
    padding: 0;
    font-size: 14px;
    background-color: #fff;
  `,
  number: css`
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    input[type="number"] {
      -moz-appearance: textfield;
    }
  `,
};

export default function Form() {
  return (
    <>
      <div css={style.formDiv}>
        {/* <form action="">
              <div className='form-floating mb-3'>
                <input type="text" className="form-control" name="firstName" id="firstName" placeholder="First name" required />
                <label for="firstName">First name</label>
              </div>
              <div className='form-floating mb-3'>
                <input type="text" className="form-control" name="lastName" id="lastName" placeholder="Last name" />
                <label for="lastName">Last name</label>
              </div>
              <div className='form-floating mb-3'>
                <input type="date" className="form-control" name="date" id="date" />
                <label for="date">Event date</label>
              </div>
              <div className='form-floating mb-3'>
                <textarea className="form-control" name="eventDetails" id="eventDetails" cols="30" rows="10"></textarea>
                <label for="eventDetails">Event details</label>
              </div>
            </form> */}
        <form
          action=""
          css={css`
            width: 100%;
            background-color: #fff;
          `}
        >
          {/* name */}
          <div className="d-flex justify-content-between mb-3">
            {/* first name */}
            <div className="me-3">
              <div>
                <label htmlFor="firstName">First name</label>
              </div>
              <div>
                <input type="text" name="firstName" id="" />
              </div>
            </div>
            {/* last name */}
            <div className="">
              <div>
                <label htmlFor="lastName">Last name</label>
              </div>
              <div>
                <input type="text" name="lastName" id="" />
              </div>
            </div>
          </div>
          {/* event details */}
          <div className="mb-3">
            <div>
              <label htmlFor="eventDetails">Event details</label>
            </div>
            <div>
              <textarea
                css={css`
                  width: 100%;
                `}
                name="eventDetails"
                id=""
              ></textarea>
            </div>
          </div>

          {/* event date */}
          <div className="d-flex mb-3">
            <div className="me-3">
              <label htmlFor="date">Event date</label>
            </div>
            <div>
              <input type="date" name="date" id="" />
            </div>
          </div>

          {/* contact details */}
          <div className="d-flex mb-3">
            <div>
              <div className="me-3">
                <label htmlFor="conatactNumer">Contact number</label>
              </div>
              <div css={style.number}>
                <input type="number" name="conatactNumer" id="" />
              </div>
            </div>

            <div className="ms-3">
              <div>
                <label htmlFor="email">Email</label>
              </div>
              <div>
                <input type="email" name="email" id="" />
              </div>
            </div>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
