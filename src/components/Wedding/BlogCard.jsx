import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const style = {
  wCardMain: css`
    max-width: 410px;
    height: 440px;
  `,
  imgLink: css`
  display: block;
  text-decoration: none;
  max-width: 410px;
  max-height: 410px;
  overflow: hidden;
  img {
    width: 100%;
    max-heigt: 410px;
    object-fit: cover;
  }
  `,
  duoLink: css`
  display: block;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-family: "Julius Sans One", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  color: #f1f1f1;
  `,
  destination: css`
  text-transform: none !important;
  font-family: "Times New Roman", serif;
  font-size: 14px;
  font-weight: normal;
  color: #999;
  `,
  seeMore: css`
  text-decoration: none;
  font-size: 10px;
  letter-spacing: 0.2em;
  font-weight: bold !important;
  text-transform: uppercase;
  color: #991090;
  &:hover {
  color: #7928ca;
  }
  span {
  font-size: 8px;
  color: inherit;
  }
  `,

};

const BlogCard = ({ weddingInfo }) => {
  return (
    <div css={style.wCardMain}>
      <div css={css`margin-bottom: 1rem;`}>
        <Link to="#" css={style.imgLink}>
          <img
            src={`/images/${weddingInfo.img}`}
            alt="wedding-blog"
          />
        </Link>
      </div>
      <div>
        <Link to="#" css={style.duoLink}>
          {weddingInfo.bride}-{weddingInfo.groom}
        </Link>
        <p css={style.destination}>{`${weddingInfo.city}, ${weddingInfo.country}`}</p>
      </div>

      <div css={css`margin-top: 1.5rem;`}>
        <Link to="#" css={style.seeMore}>READ MORE <span>&#9654;</span></Link>
      </div>
    </div>
  );
};

export default BlogCard;
