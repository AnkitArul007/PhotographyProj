/* eslint-disable react/no-unknown-property */
import React, { useEffect, useMemo } from 'react';
import { css } from '@emotion/react';
import SectionHeaders from '../../commonComponents/SectionHeaders';
import VideoTile from './VideoTile';
import PageWrapper from '../Common/PageWrapper';
import { useFetch } from '../../hooks/useFetch';

const styles = {
    pageTitle: css`
    border-block-end: 1.5px solid;
    border-image-source: linear-gradient(90deg, transparent, #f81ce5, #7928ca, #eb367f, transparent 100%);
    border-image-slice: 1;
    `,
}

const Films = () => {
    const { loading, getData, error, data } = useFetch()

    useEffect(() => {
        const url = `${import.meta.env.VITE_ROOT_URL}/video`
        getData(url)
    }, [])

    const videos = useMemo(() => {
        if (!Array.isArray(data?._data?.data)) return []
        let finalRes = []
        let prev = null
        data?._data?.data?.forEach((video, i) => {
            if (i % 2 == 0) {
                prev = video
            }
            else {
                finalRes.push([prev, video])
                prev = null
            }
        });
        if (prev) {
            finalRes.push([prev])
        }
        return finalRes
    }, [data?._data?.data, error, loading])

    return (
        <>
            <PageWrapper isLoading={loading}>
                <div className="container py-5">
                    {/* page title */}
                    <div css={styles.pageTitle} className="pb-5 mb-2">
                        <SectionHeaders pagetitle={"Filmycuts"} />
                    </div>
                    {/* video / films section */}
                    <div className="container py-3">
                        <div className="row">
                            {
                                videos?.map((video, i) => {
                                    console.log(video?.[0]?.video_url)
                                    return <div className="col-lg-6 col-md-12">
                                        <VideoTile title={video?.[0]?.title ?? ""} url={video?.[0]?.video_url ?? ""} />
                                        { video.length > 1 && <VideoTile title={video?.[1]?.title ?? ""} url={video?.[1]?.video_url ?? ""} />}
                                    </div>

                                })
                            }
                        </div>
                    </div>
                </div>
            </PageWrapper>
        </>
    )
}

export default Films;