/* eslint-disable react/no-unknown-property */
import { css } from "@emotion/react";
import { categoryData } from "../../database/cataegories/categories";
import SectionHeaders from "../../commonComponents/SectionHeaders";

const style = {
  mainDiv: css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  flex-wrap: wrap;
  `,

  card: css`
  position: relative !important;
  margin: 20px auto 0;
  width: 270px;
  height: auto;
  background: linear-gradient(0deg, rgb(0, 0, 0), rgb(44,43,43));
  z-index: 1;
  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    background: linear-gradient(45deg, #f81ce5, #7928ca, #eb367f, #d4d4d4 93%);
    background-size: 300%;
    width: calc(100% + 8px);
    height: calc(100% + 8px);
    z-index: -1;
    filter: blur(0.5rem);
  }
  `,
  imageDiv: css`
  height: 270px;
  width: 270px;
  // border-radius: 50%;
  object-fit: contain;
  `,
  categoryImage: css`
  // border-top-left-radius: 2rem;
  // border-top-right-radius: 2rem;
  width: 100%;
  height: 100%;
  // border-radius: 50%;
  overflow: hidden;
  `,
  categoryName: css`
  font-family: 'Bad Script', cursive;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  margin-top: 18px;
  // font-family: 'Julius Sans One', sans-serif !important;
  // font-family: 'Dancing Script', cursive;
  `,
  textDiv: css`
  margin-top: 4px;
  `,
  categoryAboutText: css`
  font-family: 'Bad Script', cursive;
  text-align: center;
  font-size: 12px;
  `,
}


export default function Categories() {
  return (
    <>
      <section
        css={css`
          display: block;
          padding: 60px;
          font-family: 'Julius Sans One', sans-serif !important;
        `}
      >
        <SectionHeaders pagetitle={"Categories"} />
        <div css={style.mainDiv}>
          {categoryData.map((category, index) => {
            return (
              <div 
                css={style.card}
                key={category.id}
              > 
                {/* image card container */}
                  <div css={css`display: flex; flex-direction: column; align-items: center; justify-content: center;`} >
                    <div css={style.imageDiv}>
                      <img css={style.categoryImage}
                        src={category.image}
                        alt={category.imageAlt}
                      />
                    </div>

                    <div css={style.textDiv}>
                      <p css={style.categoryName}>{category.name}</p>
                      <p css={style.categoryAboutText}>{category.about}</p>
                    </div>
                  </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
