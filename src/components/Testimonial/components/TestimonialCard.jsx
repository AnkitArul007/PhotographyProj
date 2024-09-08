/* eslint-disable react/no-unknown-property */
import React , { useEffect } from 'react'
import { css } from '@emotion/react'
import "../../../App.css"
import { useFetch } from "../../../hooks/useFetch";

const TestimonialCard = () => {
    const { data, error, getData, loading } = useFetch()

    useEffect(() => {
        const url = `${import.meta.env.VITE_ROOT_URL}/testimonial`
        getData(url)
    }, [])

    return (
        <>
            {
                 Array.isArray(data?._data?.data) && data?._data?.data?.map((testimony) => {
                    return (
                        <div
                        className="bg-transparent"
                        css={css`
                          flex: 0 0 calc(50% - 100px);
                        `}
                      >
                    <div key={testimony.id} className="card mt-5 position-relative" css={style.card}>
                        <div className="img-cont bg-transparent position-absolute" css={style.imagecont}>
                            <img css={style.image}
                             src="https://images.unsplash.com/photo-1689163928284-ccd49ac5248a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt="image" height={"80px"} width="80px" />
                        </div>

                        {/* description */}
                        <div className='bg-transparent mt-5'>
                            <p
                                className='bg-transparent'
                                css={
                                    css`color: #fff;
                letter-spacing: 1px;
                `}>
                                {testimony?.description ?? ""}
                            </p>
                        </div>

                        {/* person details */}
                        <div className='bg-transparent d-flex flex-wrap justify-content-between'>
                            <div className="name-details bg-transparent">
                                <p className='bg-transparent' css={css`font-size: 12px; color: #fff;`}>{testimony?.photographer_name}</p>
                                <p className='bg-transparent' css={css`font-size: 8px; color:#fff;`}>photographer</p>
                            </div>
                            <div className='bg-transparent'>
                                <p className='neon-grad' css={css`font-size: 12px; font-weight: bold;`}>Rushal Creation</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    )
                })
            }
        </>
    )
}

export default TestimonialCard

const style = {
    imagecont: css`
    top: -40px;
    border-radius: 50%;

    `,
    card: css`
    min-width: 45rem;
    max-height: 27rem;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: #fff;
    padding: 20px;
    
    background: transparent;
    z-index: 1;
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    backdrop-filter: saturate(180%) blur(20px);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    perspective: 1000;

    border-block: 0.1rem solid;
    border-inline-end: 0.1rem solid;
    border-inline-start: 0.1rem solid;
    border-image-source: linear-gradient(90deg, #f81ce5, #7928ca, #eb367f);
    border-image-slice: 1;
    `,
    image: css`
    border-radius: 50%;
    object-fit: cover;
    `,
}