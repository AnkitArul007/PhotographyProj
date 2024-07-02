import { css } from "@emotion/react"

const style = {
    titleMain: css`
    text-align: center;
    `,
    title: css`
    font-size: 2.25rem;
    font-family: 'Dancing Script', cursive;
    font-weight: 500;
    text-transform: none;
    white-space: nowrap;
    margin-bottom: 6px;
    color: #fff1f1;
    `,
    dateVenue: css`
    text-transform: none;
    text-transform: capitalize !important;
    font-family: "Times New Roman", serif;
    white-space: nowrap;
    font-weight: normal;
    font-size: 14px;
    color: #8c8c8c;
    letter-spacing: 0.5px;
    `,
}

const BlogInfo = ({info}) => {
  return (
    <div css={style.titleMain}>
      <h3 css={style.title}>{info.bride} & {info.groom}</h3>
      <p css={style.dateVenue}>{info.date} | {info.city}, {info.country}</p>
    </div>
  )
}

export default BlogInfo