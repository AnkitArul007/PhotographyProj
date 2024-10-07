/* eslint-disable react/no-unknown-property */
import { css } from "@emotion/react"

const BlogImage = ({src}) => {
  return (
    <div css={css`
    max-width: 920px;
    min-width: 300px;
    height: auto;
    overflow: hidden;
    margin-bottom: 20px;
    `}>
        <img css={css`
            width: 100%;
            height: auto;
            object-fit: contain;
            `} src={src} alt="" />
    </div>
  )
}

export default BlogImage