/* eslint-disable react/no-unknown-property */
import React from 'react'
import { css } from '@emotion/react'

const StoryCards = ({title, clientName, story, url, id}) => {
  return (
    <React.Fragment>
        <div className="p-0 position-relative" css={css`
        border-radius: 5px;
        width:30rem;
        height: fit-content;
        background:var(--golden-bg);
        box-shadow:var(--golden-box-shadow);
        cursor:pointer;
        
        // &::after{
        //     content:"";
        //     position:absolute;
        //     top:0;
        //     left:0;
        //     width:120%;
        //     height:120%;
        //     background:red;
        //     z-index:-10;
        // }
        `}
        // onClick={()=>setIsActiveCard(id)}
        >
            <div className="imgCont" css={css`
            width:30rem;
            height:30rem;
            border-radius: 5px;
            `}>
                <img src={url} alt={"image"}  css={css`
                width:30rem;
                height:30rem;
                object-fit:cover;
                object-position: center;
                border-radius: 5px;
                `}/>
            </div>

            <div className="clientDetails px-1">
                <div className="heading text-center py-3">
                    <h3 className='text-uppercase metallic-text-grad' css={css`
                    font-family:'Julius Sans One', sans-serif;
                    font-size: var(--mid-text);
                    `}>{title}</h3>
                </div>
                <div className="clientName">
                    <p className='text-capitalize text-center' css={css`
                    font-size: var(--small-text);
                    font-family:'Dancing Script', cursive;
                    `}>{clientName}</p>
                </div>
                <div className="clientStory" >
                    <p className='text-center' css={css`
                    font-size:var(--xs-text);
                    font-family:'Dancing Script', cursive;
                    
                    `}>{story}</p>
                </div>
            </div>

            <button type='button' css={css`
                width:100%;
                border:none;
                background: linear-gradient(#1f1f1f, #000000 60%, #1f1f1f);
                padding: 0.4rem 0;
                border-radius: 1rem;
                font-size:var(--small-text);
                font-family: 'VT323', monospace;
            `}>
               Explore
            </button>
        </div>
    </React.Fragment>
  )
}

export default StoryCards