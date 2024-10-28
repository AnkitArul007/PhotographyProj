/* eslint-disable react/no-unknown-property */

import React, { useState, useRef, useEffect } from 'react';
import { css } from '@emotion/react';
import SectionHeaders from '../../commonComponents/SectionHeaders';
import { useFetch } from '../../hooks/useFetch';
import { UseNotification } from '../toast';

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

    clientDiv: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 36px 28px;
    @media (max-width: 768px) {
    flex-direction: column;
    }
    `,

    clientName: css`
    width: 49%;
    @media (max-width: 768px) {
    width: 100% !important;
    }
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
    date: css`
    &::-webkit-calendar-picker-indicator {
        filter: invert(1);
    }
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
    const { data, loading, error, postData } = useFetch();
    const firstName = useRef("")
    const lastName = useRef("")
    const date = useRef("")
    const message = useRef("")
    const event_type = useRef("")
    const venue = useRef("")
    const email = useRef("")
    const contactNumber = useRef("")
    const contactModeRef = useRef("")

    const eventType = [
        {
            label: "Wedding",
            value: "WEDDING"
        },
        {
            label: "Pre Wedding",
            value: "PREWEDDING"
        },
        {
            label: "Birthday Party",
            value: "BIRTHDAYPARTY"
        },
        {
            label: "Films",
            value: "FILMS"
        },
        {
            label: "Kids",
            value: "KIDS"
        },
        {
            label: "Sports",
            value: "SPORTS"
        },
        {
            label: "Maternity",
            value: "MATERNITY"
        },
        {
            label: "Events",
            value: "EVENTS"
        },
        {
            label: "Wild Life",
            value: "WILDLIFE"
        },
        {
            label: "Personal",
            value: "PERSONAL"
        },
    ]

    const contactMode = [
        {
            label: 'EMAIL',
            value: "EMAIL",
        },
        {
            label: 'PHONE',
            value: "PHONE",
        },
    ]
    const { triggerNotification } = UseNotification({ duration: 5000 })

    useEffect(() => {
        if (data?._success) {
            triggerNotification({ message: "Form Submitted successfully!!!.", type: "SUCCESS" })
            firstName.current.value = ""
            lastName.current.value = ""
            date.current.value = ""
            message.current.value = ""
            event_type.current.value = ""
            venue.current.value = ""
            email.current.value = ""
            contactNumber.current.value = ""
            contactModeRef.current.value = ""
            return
        }
        else if (error) {
            triggerNotification({ message: data?.error_message ? data?.error_message : "Something Went Wrong!!!.", type: "ERROR" })
            return
        }
    }, [loading, error, data])

    return (
        <>
            <div className="container py-5">
                <div css={styles.pageTitle} className="pb-5 mb-2">
                    <SectionHeaders pagetitle={"Contact Us"} />
                </div>
                {/* contact us form texts */}
                <div css={styles.pageTitle} className="py-3 mx-5 text-center">
                    <p className="fs-3">
                    Welcome to the &quot;Contact Us&quot; page of Rusalk Creation! We are excited to hear from you. Whether you're interested in our photography or filmmaking services, have questions, or want to discuss your upcoming project, we’re here to help. Please fill out the form below with your details, and our team will get back to you as soon as possible. Your vision matters to us, and we look forward to collaborating with you to create unforgettable memories. Thank you for considering Rusalk Creation for your special moments!
                    </p>
                </div>

                {/* contact form div */}
                <div className="mt-5 pt-5">
                    <form action="" className=""
                        onSubmit={(e) => {
                            e.preventDefault()
                            const url = `${import.meta.env.VITE_ROOT_URL}/contact-us`
                            console.log(url)
                            const body = {
                                name: `${firstName?.current?.value} ${lastName?.current?.value}`,
                                email: email?.current?.value,
                                phone: contactNumber?.current?.value,
                                event_type: event_type?.current?.value,
                                event_date: date?.current?.value,
                                message: message?.current?.value,
                                preferred_contact_method: contactModeRef?.current?.value,
                            }
                            postData(url, body, "POST");
                        }}
                    >
                        <div css={styles.clientDiv}>
                            <div css={styles.clientName} className="mb-4">
                                <label css={styles.labelStyle} className="fs-3 mb-2" htmlFor="firstName">First name <span css={styles.requiredSpan}>(required)</span></label><br />
                                <input ref={firstName} css={styles.inputStyle} type="text" name="firstName" required />
                            </div>
                            <div css={styles.clientName} className="mb-4">
                                <label css={styles.labelStyle} className="fs-3 mb-2" htmlFor="lastName">Last name</label><br />
                                <input ref={lastName} css={styles.inputStyle} type="text" name="lastName" />
                            </div>
                        </div>

                        <div className="d-flex align-items-center justify-content-between mb-3" css={css`margin: 0 36px 28px;`}>
                            <div css={css`width: 100%`} className="mb-4">
                                <label css={styles.labelStyle} className="fs-3 mb-2" htmlFor="eventDate">Event Date <span css={styles.requiredSpan}>(required)</span></label><br />
                                <input ref={date} css={[styles.inputStyle, styles.date]} type="date" name="eventDates" required />
                            </div>
                        </div>

                        <div className="d-flex align-items-center justify-content-between mb-3" css={css`margin: 0 36px 28px;`}>
                            <div css={css`width: 100%`} className="mb-4">
                                <label css={styles.labelStyle} className="fs-3 mb-2" htmlFor="event_type">Event Type <span css={styles.requiredSpan}>(required)</span></label><br />
                                <select ref={event_type} css={styles.inputStyle} name="event_type" id="">
                                    {
                                        eventType?.map((event, i) => <option key={i} value={event?.value} >{event?.label}</option>)
                                    }
                                </select>
                            </div>
                        </div>

                        <div className="d-flex align-items-center justify-content-between mb-3" css={css`margin: 0 36px 28px;`}>
                            <div css={css`width: 100%`} className="mb-4">
                                <label css={styles.labelStyle} className="fs-3 mb-2" htmlFor="venue">Venue <span css={styles.requiredSpan}>(required)</span></label><br />
                                <input ref={venue} css={styles.inputStyle} type="text" name="venue" required />
                            </div>
                        </div>

                        <div className="d-flex align-items-center justify-content-between mb-3" css={css`margin: 0 36px 28px;`}>
                            <div css={css`width: 100%`} className="mb-4">
                                <label css={styles.labelStyle} className="fs-3 mb-2" htmlFor="email">Email</label><br />
                                <input ref={email} css={styles.inputStyle} type="email" name="email" />
                            </div>
                        </div>

                        <div className="d-flex align-items-center justify-content-between mb-3" css={css`margin: 0 36px 28px;`}>
                            <div css={css`width: 100%`} className="mb-4">
                                <label css={styles.labelStyle} className="fs-3 mb-2" htmlFor="venue">Contact Number <span css={styles.requiredSpan}>(required)</span></label><br />
                                <input ref={contactNumber} css={styles.inputStyle} type="text" name="venue"
                                    maxLength={10}
                                    minLength={10}
                                    required />
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-3" css={css`margin: 0 36px 28px;`}>
                            <div css={css`width: 100%`} className="mb-4">
                                <label css={styles.labelStyle} className="fs-3 mb-2" htmlFor="contact_mode">Contact Mode <span css={styles.requiredSpan}>(required)</span></label><br />
                                <select ref={contactModeRef} css={styles.inputStyle} name="contact_mode" id="">
                                    {
                                        contactMode?.map((event, i) => <option key={i} value={event?.value} >{event?.label}</option>)
                                    }
                                </select>
                            </div>
                        </div>

                        <div className="d-flex align-items-center justify-content-between mb-3" css={css`margin: 0 36px 28px;`}>
                            <div css={css`width: 100%`} className="mb-4">
                                <label css={styles.labelStyle} className="fs-3 mb-2" htmlFor="message">Message<span css={styles.requiredSpan}>(required)</span></label><br />
                                <textarea ref={message}
                                    maxLength={200}
                                    css={styles.textArea} rows={10} type="text" name="message" required />
                            </div>
                        </div>

                        <div className="d-flex align-items-center justify-content-between mb-3" css={css`margin: 0 36px 28px;`}>
                            <button css={styles.submitBtn} type="submit">
                                {"Submit"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ContactForm;
