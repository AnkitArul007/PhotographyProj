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
        <section css={style.section} className='mt-5 border'>
            <SectionHeaders pagetitle={"Testimonials"}/>
            <div className="container d-flex align-items-center justify-content-center" > 
                <div className="team-testimonials">
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
    `,
    teamtestimonails: css`
    display: flex;
    justify-content: start;
    align-items: start;
    gap: 2rem;
    border: 1px solid red;
    `

}