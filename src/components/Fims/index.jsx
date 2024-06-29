/* eslint-disable react/no-unknown-property */
import React from 'react';
import { css } from '@emotion/react';
import SectionHeaders from '../../commonComponents/SectionHeaders';
import VideoTile from './VideoTile';

const styles = {
    pageTitle: css`
    border-block-end: 1.5px solid;
    border-image-source: linear-gradient(90deg, transparent, #f81ce5, #7928ca, #eb367f, transparent 100%);
    border-image-slice: 1;
    `,
}

const Films = () => {
  return (
    <>
        <div className="container py-5">
            {/* page title */}
            <div css={styles.pageTitle} className="pb-5 mb-2">
                <SectionHeaders pagetitle={"Filmycuts"} />
            </div>
            {/* video / films section */}
            <div className="container py-3">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <VideoTile />
                        <VideoTile />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <VideoTile />
                        <VideoTile />
                    </div>
                </div>
            </div>
        </div>    
    </>
  )
}

export default Films;