import React from 'react'
import PageWrapper from '../components/Common/PageWrapper';
import { useFetch } from '../hooks/useFetch';
import SectionHeaders from "../commonComponents/SectionHeaders";
import { css } from "@emotion/react";


const PreWedding = () => {
    const { loading } = useFetch()
    return (
        <PageWrapper isLoading={loading}>
            <div className="container my-5">
                <SectionHeaders pagetitle={"Pre Wedding"} />
                <div className="container d-flex flex-wrap justify-content-center align-items-center gap-4"
                    css={css`
        min-height: 100vh;
        `}
                >
                </div>
            </div>
        </PageWrapper>
    )
}

export default PreWedding
