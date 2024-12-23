/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
import { useEffect } from "react";
import { css } from "@emotion/react";
import SectionHeaders from "../../commonComponents/SectionHeaders";
import VideoTile from "./VideoTile";
import PageWrapper from "../Common/PageWrapper";
import { useFetch } from "../../hooks/useFetch";

const styles = {
  pageTitle: css`
    border-block-end: 1.5px solid;
    border-image-source: linear-gradient(
      90deg,
      transparent,
      #f81ce5,
      #7928ca,
      #eb367f,
      transparent 100%
    );
    border-image-slice: 1;
  `,
};

const Films = () => {
  const { data, loading, postData } = useFetch();

  useEffect(() => {
    const url = `${import.meta.env.VITE_ROOT_URL}/video/get`;
    postData(url, {w: 800});
  }, []);

  return (
    <>
      <PageWrapper isLoading={loading}>
        <div className="container py-5">
          <div css={styles?.pageTitle} className="pb-5 mb-2">
            <SectionHeaders pagetitle={"Filmycuts"} />
          </div>
          <div className="container py-3">
            <div className="row">
              {data?._data?.data.map((video, i) => {
                return (
                  <div className="col-lg-6 col-md-12" key={`${video.id}-${i}`}>
                    <VideoTile
                      title={video?.title ?? ""}
                      url={video?.video_url ?? ""}
                      thumbnail={video?.thumbnail ?? ""}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default Films;
