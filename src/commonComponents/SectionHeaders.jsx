/* eslint-disable react/no-unknown-property */
import React from 'react'
import { css } from '@emotion/react'

const SectionHeaders = ({pagetitle}) => {
  return (
    <React.Fragment>
        <header className="d-flex justify-content-center">
            <h2 className='text-center neon-grad text-capitalize p-2' css={css`
            font-family: 'Monoton', cursive;
            font-size:var(--large-text)
            `}>{pagetitle}</h2>
        </header>
    </React.Fragment>
  )
}

export default SectionHeaders