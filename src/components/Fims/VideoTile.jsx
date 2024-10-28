/* eslint-disable react/no-unknown-property */
import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const style = {
    video: css`
    position: relative;
    overflow: hidden;
    width: 80%;
    border: 0.2em solid transparent;
    &:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0);
        transition: background-color .15s;
    }
    &:hover {
        figure {
            img {
                opacity: 0.8;
                transform: scale(1);
            }
            figcaption {
                opacity: 0;
                transform: translateY(50%);
            }
        }
    }
    &:hover:before {
        background-color: rgba(0,0,0,0.3);
    }
    `,
    link: css`
    outline: none;
    `,
    figure: css`
    display: block;
    position: relative;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    `,
    image: css`
    display: block;
    max-width: 100%;
    height: auto;
    opacity: 0;
    transform: scale(0.5);
    transition: all .20s;
    `,
    caption: css`
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    background: rgba(0,0,0,0.6);
    color: #fff;
    font-size: 1.4rem;
    font-weight: 600;
    padding: 1rem;
    transform: translateY(0);
    opacity: 1;
    transition: all .20s;
    `,
}



const VideoTile = ({title , url, thumbnail}) => {
  return (
    <>
        <div className='mx-auto' css={style.video}>
            <Link 
            css={style.link}
            to={url} target="_blank">
                <figure css={style.figure} style={{backgroundImage: `url(${thumbnail})`}}>
                    <img 
                    css={style.image} 
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/50598/video-thumb-placeholder-16-9.png" 
                    alt="" />
                    <figcaption css={style.caption}>{title}</figcaption>
                </figure>
            </Link>
        </div>
    </>
  )
}

export default VideoTile