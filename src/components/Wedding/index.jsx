/* eslint-disable react/no-unknown-property */
import { css } from "@emotion/react"
import SectionHeaders from "../../commonComponents/SectionHeaders"
import VideoPlayer from "./VideoPlayer"
import WeddingGrid from "./WeddingGrid"

const Style = {
    sectionMain: css`
    width: 100%;
    min-width: 360px;
    margin: 0 auto;

    `,
    divMain: css`
    width: 100%;
    min-width: 328px;
    max-width: 1440px;
    margin: 0 auto;
    text-align: center;
    padding: 1rem;
    `,
}


const PreWedding = () => {
  return (
    <section css={Style.sectionMain}>
        <div css={Style.divMain}>
            <SectionHeaders pagetitle={"Pre-Weddings"} />
            <VideoPlayer />
            <div css={css`width: 100%;`}>
                <WeddingGrid />
            </div>
        </div>
    </section>
  )
}

export default PreWedding;