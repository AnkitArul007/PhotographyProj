/* eslint-disable react/no-unknown-property */
import { css } from "@emotion/react";
import { categoryData } from "../../database/cataegories/categories";
import SectionHeaders from "../../commonComponents/SectionHeaders";

const style = {
  mainDiv: css`
    // display: flex;
    // flex-direction: row;
    // align-items: center;
    // justify-content: space-between;
    // gap: 18px;
    // flex-wrap: wrap;
    border-radius: 5px;
    display: grid;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    grid-template-rows: auto;
    column-gap: 2rem;
    row-gap: 2rem;
  `,

  card: css`
    position: relative !important;
    margin: 20px;
    width: auto;
    width: 270px;
    height: auto;
    // background: linear-gradient(0deg, rgb(0, 0, 0), rgb(44,43,43));
    background-clip: border-box;
    border-image-source: linear-gradient(90deg, #f81ce5, #7928ca, #eb367f);
    border-image-slice: 1;
    z-index: 1;
    border-radius: 5px;
    position: realtive;
    padding: 0;
    &:after {
      content: "";
      position: absolute;
      top: -1px;
      left: -1px;
      right: -1px;
      bottom: -1px;
      background: linear-gradient(
        90deg,
        #f81ce5,
        #7928ca,
        #eb367f,
        #d4d4d4 93%
      );
      z-index: -1;
      border-radius: 5px;
    }
  `,
  imageDiv: css`
    height: 270px;
    width: 270px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  categoryImage: css`
    width: 100%;
    height: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    object-fit: cover;
  `,

  textDiv: css`
    margin-top: 4px;
    width: 100%;
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    width: 100%;
  `,
  categoryName: css`
    font-family: "Bad Script", cursive;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    margin-top: 18px;
    margin-left: 10px;
    margin-right: 10px;
    font-family: "Julius Sans One", sans-serif !important;
    // font-family: 'Dancing Script', cursive;
    background: linear-gradient(#1f1f1f, #000000 60%, #1f1f1f);
    padding-top: 4px;
    padding-bottom: 4px;
    border-radius: 1rem;
  `,
  categoryAboutText: css`
    font-family: "Bad Script", cursive;
    text-align: center;
    font-size: 12px;
    background: linear-gradient(180deg, #fff, #505050);
  `,
};

export default function Categories() {
  return (
    <>
      <section
        className="my-5"
        css={css`
          display: block;
          padding: 60px;
          font-family: "Julius Sans One", sans-serif !important;
        `}
      >
        <div className="pb-5">
          <SectionHeaders pagetitle={"Categories"} />
        </div>
        <div css={style.mainDiv}>
          {categoryData.map((category, index) => {
            return (
              <div css={style.card} key={category.id}>
                {/* image card container */}
                <div
                  css={css`
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    border-radius: 5px;
                  `}
                >
                  <div css={style.imageDiv}>
                    <img
                      css={style.categoryImage}
                      src={category.image}
                      alt={category.imageAlt}
                    />
                  </div>

                  <div css={style.textDiv}>
                    <p css={style.categoryName}>{category.name}</p>
                    {/* <p css={style.categoryAboutText}>{category.about}</p> */}
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
