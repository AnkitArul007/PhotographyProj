import { css } from "@emotion/react"
import { Link } from "react-router-dom"

const style = {
    vidMain: css`
    width: 100%;
    max-width: 920px;
    min-width: 920px;
    height: auto;
    max-height: 520px;
    margin: 0 auto;
    `,
    video: css`
    width: 100%;
    height: auto;
    display: block;
    `,
}

const VideoPlayer = () => {
  return (
    <div css={style.vidMain} className="my-5">
      <Link to={`mailto:?subject=&body=`}></Link>
      <video css={style.video} controls>
        <source src="" type="video/mp4" />
        Your browser does not the video format
      </video>
    </div>
  )
}

export default VideoPlayer