/* eslint-disable react/no-unknown-property */
import React from 'react';
import { css } from '@emotion/react';
import { queAns } from './QusAns';
import SectionHeaders from '../../commonComponents/SectionHeaders';
import QuesAnsComponent from './QuesAnsComponent';

const style = {
    pageTitle: css`
    border-block-end: 1.5px solid;
    border-image-source: linear-gradient(90deg, transparent, #f81ce5, #7928ca, #eb367f, transparent 100%);
    border-image-slice: 1;
    `,
    quesAnsCotainer: css`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 2rem;
    `,

}


const Faqs = () => {
  return (
    <>
        <div className="container py-5">
            {/* page title */}
            <div className="pb-5 mb-2">
                <SectionHeaders pagetitle={"FREQUENTLY ASKED QUESTIONS"} />
            </div>

            {/* Questions and answer container */}
            <div css={style.quesAnsCotainer}>
                {
                    queAns.map((item, index) => {
                        return (
                            <QuesAnsComponent
                                key={item.id}
                                question={item.ques}
                                answer={item.ans}
                            />
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Faqs;