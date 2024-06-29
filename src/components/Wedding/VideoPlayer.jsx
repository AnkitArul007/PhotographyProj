import { css } from "@emotion/react"

const style = {
    vidMain: css`
    width: 100%;
    max-width: 920px;
    min-width: 920px;
    height: 100%;
    max-height: 520px;
    min-height: 520px;
    margin: 0 auto;
    background-color: #fff;
    `,
}

const VideoPlayer = () => {
  return (
    <div css={style.vidMain} className="my-5">Video Player</div>
  )
}

export default VideoPlayer