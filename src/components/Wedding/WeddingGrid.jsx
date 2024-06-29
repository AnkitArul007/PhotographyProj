import { css } from "@emotion/react"

const style = {
  wdGridMain: css`
  width: 100%;
  margin: 0 auto;
  max-width: 1400px;
  `,
  wdGridContainer: css`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-template-rows: auto;
  column-gap: 3rem;
  row-gap: 3rem;
  `,
  weddingCard: css`
  width: 310px;
  height: 400px;
  background-color: #fff;
  `,
}

const WeddingGrid = () => {
  return (
    <div css={style.wdGridMain}>
      <div css={style.wdGridContainer}>
        <div css={style.weddingCard}>1</div>
        <div css={style.weddingCard}>2</div>
        <div css={style.weddingCard}>3</div>
        <div css={style.weddingCard}>4</div>
        <div css={style.weddingCard}>5</div>
        <div css={style.weddingCard}>6</div>
        <div css={style.weddingCard}>7</div>
        <div css={style.weddingCard}>8</div>
        <div css={style.weddingCard}>9</div>
        <div css={style.weddingCard}>10</div>

      </div>
    </div>
  )
}

export default WeddingGrid