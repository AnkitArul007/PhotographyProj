import React from 'react'
import { MdErrorOutline } from 'react-icons/md'
import { IoWarningOutline } from 'react-icons/io5'
import { IoIosInformationCircleOutline } from 'react-icons/io'
import { CiCircleCheck } from 'react-icons/ci'
import { css } from "@emotion/react";

const Notification = ({ message, type }) => {
    const style = {
        outerDiv: css`
            transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
            min-width : 200px
            transform: translateX(10px);
            user-select: none;
            border-radius: 0.25rem;
            padding : 8px;
            max-width: 300px;
            max-height: 200px;
            min-height: 1.25rem;
            display: flex;
            align-items: center;
            gap: 0.5rem
          `,
        SUCCESS: css`
            background : #42AE18 !important;
            `,
        ERROR: css`
            background : #FF5454 !important;
            `,
        WARNING: css`
            background : #F99C30 !important;
            `,
        INFO: css`
            background : #3056D3 !important;
            `,
        message: css`
                font-size: 1rem;
                line-height: 1.5rem;
                text-transform: capitalize;
                color : #fff;
            `
    }
    const Icons = {
        "ERROR": <MdErrorOutline css={style[type]} size={25} style={{ color: 'white' }} />,
        "WARNING": <IoWarningOutline css={style[type]} size={25} style={{ color: 'white' }} />,
        "INFO": <IoIosInformationCircleOutline css={style[type]} size={25} style={{ color: 'white' }} />,
        "SUCCESS": <CiCircleCheck css={style[type]} size={25} style={{ color: 'white' }} />
    }

    
    return (
        <div css={[style.outerDiv, style[type]]}>
            <span css={style[type]}>
                {Icons[type]}
            </span>
            <span css={[style.message , style[type]]}>
                {message}
            </span>
        </div>
    )
}

export default Notification
