/* eslint-disable react/no-unknown-property */
import React from 'react'
import { css } from '@emotion/react'
import "../../../App.css"

const TestimonialCard = () => {
  return (
    <React.Fragment>
        <div className="card mt-5 position-relative" css={style.card}>
            <div className="img-cont bg-transparent position-absolute" css={style.imagecont}>
                <img css={style.image} src="https://images.unsplash.com/photo-1689163928284-ccd49ac5248a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt="image" height={"80px"} width="80px" />
            </div>

            {/* description */}
            <div className='bg-transparent mt-5'>
                <p className='bg-transparent'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur facilis at, voluptates corporis mollitia repellendus, nesciunt eligendi saepe tenetur, beatae dolor eos ullam non adipisci exercitationem molestiae quam aliquam culpa aspernatur officiis? Quam accusamus assumenda excepturi iusto facilis quasi nostrum, animi, libero doloremque delectus ab, officiis cupiditate. Ipsam, dolorem voluptate?</p>
            </div>

            {/* person details */}
            <div className='bg-transparent d-flex flex-wrap justify-content-between'>
                <div className="name-details bg-transparent">
                    <p className='bg-transparent' css={css`font-size: 12px;`}>Austin wade</p>
                    <p className='bg-transparent' css={css`font-size: 8px;`}>photographer</p>
                </div>
                <div className='bg-transparent'>
                    <p className='neon-grad' css={css`font-size: 12px; font-weight: bold;`}>Rushal Creation</p>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default TestimonialCard

const style = {
    imagecont: css`
    top: -40px;
    border: 2.5px solid #000;
    border-radius: 50%;
    `,
    card: css`
    width: 45rem;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: #fff;
    padding: 20px;
    
    background: transparent;
    z-index: 1;
    -webkit-backdrop-filter: saturate(180%) blur(5px);
    backdrop-filter: saturate(180%) blur(5px);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    perspective: 1000;

    border-block: 0.1rem solid;
    border-inline-end: 0.1rem solid;
    border-inline-start: 0.1rem solid;
    border-image-source: linear-gradient(90deg, #f81ce5, #7928ca, #eb367f);
    border-image-slice: 1;
    `,
    image:css`
    border-radius: 50%;
    object-fit: cover;
    `,
}