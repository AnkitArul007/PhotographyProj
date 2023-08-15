/* eslint-disable react/no-unknown-property */

import React, { useState } from 'react';
import { css } from '@emotion/react';
import SectionHeaders from '../../commonComponents/SectionHeaders';

const styles = {

    pageTitle: css`
    border-block-end: 1.5px solid;
    border-image-source: linear-gradient(90deg, transparent, #f81ce5, #7928ca, #eb367f, transparent 100%);
    border-image-slice: 1;
    `,

    labelStyle: css`
    font-size: 1.5rem;
    line-height: 1.4em;
    font-weight: 600;
    margin-right: 1rem;
    `,

    requiredSpan: css`
    font-size: 12px;
    font-style: italic;
    `,

    inputStyle: css`
    height: 48px;
    padding: 0.8rem;
    width: 100%;
    font-size: 1.5rem;
    font-weight: 650;
    color: #fff;
    `,

    textArea: css`
    width: 100%;
    padding: 0.8rem;
    font-size: 1.5rem;
    font-weight: 650;
    color: #fff;
    `,

    submitBtn: css`
    border: none;
    border-radius: 22px;
    height: 48px;
    width: 140px;
    color: #fff;
    font-size: 1.8rem;
    font-weight: 600;
    text-transform: capitalize;
    // background-color: #f81ce5;
    background-color: #c506b5;
    `,
};

const ContactForm = () => {

    return (
        <>
            <div className="container py-5">
                <div css={styles.pageTitle} className="pb-5 mb-2">
                    <SectionHeaders pagetitle={"Contact Us"} />
                </div>
                {/* contact us form texts */}
                <div css={styles.pageTitle} className="py-3 mx-5 text-center">
                    <p className="fs-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus blanditiis dolores hic corrupti ipsum obcaecati fugiat soluta voluptas laudantium quam!
                    </p>
                    <p className="fs-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi facere exercitationem cumque nihil dolore magnam hic explicabo culpa eum optio! Vero, similique numquam recusandae itaque aspernatur nesciunt voluptates at maxime necessitatibus commodi cum voluptatum neque autem eveniet laborum corporis fuga iusto perspiciatis sunt eaque eos consequuntur facilis dicta. Consequuntur quas modi recusandae voluptatem nesciunt adipisci consequatur. Adipisci deserunt neque doloribus corrupti, ipsa vero cum aliquam eum rem, animi, odit commodi quae at impedit harum provident quam eveniet asperiores culpa sequi nesciunt pariatur! Provident, praesentium officiis. Perspiciatis et maiores quam, similique minima voluptatum qui, iusto id, omnis deleniti architecto autem error?
                    </p>
                    <p className="fs-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit beatae amet numquam velit praesentium harum adipisci ab magnam asperiores, atque architecto reprehenderit blanditiis, distinctio repellendus animi exercitationem nihil fuga. Expedita, odio quibusdam. Vero totam doloribus placeat dignissimos asperiores. Deleniti ad accusamus consectetur odit, ex quae nisi sunt exercitationem ratione maxime nam expedita neque iste distinctio totam in dignissimos vero quas incidunt recusandae laudantium at laborum! Quas explicabo, modi molestias molestiae expedita necessitatibus recusandae maxime voluptatem laudantium assumenda dolores quibusdam cumque?
                    </p>
                </div>

                {/* contact form div */}
                <div className="mt-5 pt-5">
                    <form action="" className="mx-5 px-3">
                        <div className="d-flex align-items-center justify-content-between mb-3" css={css`margin: 0 36px 28px;`}>
                            <div css={css`width: 49%`} className="mb-4">
                                <label css={styles.labelStyle} className="fs-3 mb-2" htmlFor="firstName">First name <span css={styles.requiredSpan}>(required)</span></label><br />
                                <input css={styles.inputStyle} type="text" name="firstName" required />
                            </div>
                            <div css={css`width: 49%`} className="mb-4">
                                <label css={styles.labelStyle} className="fs-3 mb-2"  htmlFor="lastName">Last name</label><br />
                                <input css={styles.inputStyle} type="text" name="lastName" />
                            </div>
                        </div>

                        <div className="d-flex align-items-center justify-content-between mb-3" css={css`margin: 0 36px 28px;`}>
                            <div css={css`width: 100%`} className="mb-4">
                                <label css={styles.labelStyle} className="fs-3 mb-2" htmlFor="eventDate">Event Date <span css={styles.requiredSpan}>(required)</span></label><br />
                                <input css={styles.inputStyle} type="text" name="eventDates" required />
                            </div>
                        </div>

                        <div className="d-flex align-items-center justify-content-between mb-3" css={css`margin: 0 36px 28px;`}>
                            <div css={css`width: 100%`} className="mb-4">
                                <label css={styles.labelStyle} className="fs-3 mb-2" htmlFor="eventDate">Event Details <span css={styles.requiredSpan}>(required)</span></label><br />
                                <textarea css={styles.textArea} rows={10} type="text" name="eventDetails" required />
                            </div>
                        </div>

                        <div className="d-flex align-items-center justify-content-between mb-3" css={css`margin: 0 36px 28px;`}>
                            <div css={css`width: 100%`} className="mb-4">
                                <label css={styles.labelStyle} className="fs-3 mb-2" htmlFor="venue">Venue <span css={styles.requiredSpan}>(required)</span></label><br />
                                <input css={styles.inputStyle} type="text" name="venue" required />
                            </div>
                        </div>

                        <div className="d-flex align-items-center justify-content-between mb-3" css={css`margin: 0 36px 28px;`}>
                            <div css={css`width: 100%`} className="mb-4">
                                <label css={styles.labelStyle} className="fs-3 mb-2" htmlFor="email">Email</label><br />
                                <input css={styles.inputStyle} type="email" name="email" />
                            </div>
                        </div>

                        <div className="d-flex align-items-center justify-content-between mb-3" css={css`margin: 0 36px 28px;`}>
                            <div css={css`width: 100%`} className="mb-4">
                                <label css={styles.labelStyle} className="fs-3 mb-2" htmlFor="venue">Contact Number <span css={styles.requiredSpan}>(required)</span></label><br />
                                <input css={styles.inputStyle} type="text" name="venue" required />
                            </div>
                        </div>

                        <div className="d-flex align-items-center justify-content-between mb-3" css={css`margin: 0 36px 28px;`}>
                            <button css={styles.submitBtn} type="submit">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ContactForm;
