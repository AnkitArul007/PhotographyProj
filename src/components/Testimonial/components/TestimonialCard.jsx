/* eslint-disable react/no-unknown-property */
import React from 'react'
import { css } from '@emotion/react'
import "../../../App.css"

const TestimonialCard = () => {
  return (
    <React.Fragment>
        <div className="card" css={style.card}>
            <div className="img-cont bg-transparent">
                <img css={style.image} src="https://images.unsplash.com/photo-1689163928284-ccd49ac5248a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt="image" height={"80px"} width="80px" />
            </div>

            {/* description */}
            <div className='bg-transparent'>
                <p className='bg-transparent'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur facilis at, voluptates corporis mollitia repellendus, nesciunt eligendi saepe tenetur, beatae dolor eos ullam non adipisci exercitationem molestiae quam aliquam culpa aspernatur officiis? Quam accusamus assumenda excepturi iusto facilis quasi nostrum, animi, libero doloremque delectus ab, officiis cupiditate. Ipsam, dolorem voluptate?</p>
            </div>

            {/* person details */}
            <div className='bg-transparent'>
                <div className="name-details bg-transparent">
                    <p className='bg-transparent' css={css`font-size: 12px;`}>Austin wade</p>
                    <p className='bg-transparent' css={css`font-size: 8px;`}>photographer</p>
                </div>
                <div className='bg-trasparent'>
                    <p className='neon-grad '>Rushal Creation</p>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default TestimonialCard

const style = {
    card: css`
    width: 45rem;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: #fff;
    padding: 20px;
    `,
    image:css`
    border-radius: 50%;
    object-fit: cover;
    `,
}