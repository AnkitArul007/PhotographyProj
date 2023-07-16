/* eslint-disable react/no-unknown-property */
import React from 'react'
import { css } from '@emotion/react'
import SectionHeaders from '../../commonComponents/SectionHeaders'
import TestimonialCard from './components/TestimonialCard'
// import InvertedComma from "../images/invertedComma.svg"
// import T from "../images/testimonialBackground.png"

// import Person1 from "../images/person1.svg"
// import Person2 from "../images/person2.svg"
// import Person3 from "../images/person3.svg"

const Testimonial = () => {


  return (
    <React.Fragment>
        {/* <!--Testimonial Section--> */}
        <section css={style.section} className='mt-5'>
            <SectionHeaders pagetitle={"Testimonials"}/>
            <div className="container d-flex align-items-center justify-content-center mt-5 bg-transparent" > 
                <div className="team-testimonials bg-transparent">
                    <TestimonialCard />
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}

export default Testimonial

const style = {
    section: css`
    min-height: 60vh;
    background: url("https://r4.wallpaperflare.com/wallpaper/242/181/187/abstract-lines-shapes-digital-art-wallpaper-b940c8bd111a1ddb569788cf00d1e6ed.jpg");
    background-attachement: fixed;
    background-position: center;
    background-size: contain;
    `,
    teamtestimonails: css`
    display: flex;
    justify-content: start;
    align-items: start;
    gap: 2rem;
    border: 1px solid red;
    `

}