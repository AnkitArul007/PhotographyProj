/* eslint-disable react/no-unknown-property */
import { css } from "@emotion/react";
import { categoryData } from "../../database/cataegories/categories";

const style = {
  paraStyle: css`
  text-align: center;
  font-size: 16px;
  font-weight: 550;`,
  textCentre: css`
  text-align: center`,
  borderRadius: css`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;`,
}

export default function Categories() {
  return (
    <>
      <section
        css={css`
          display: block;
          padding: 60px;
        `}
      >
        <div css={css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        `}>
          {categoryData.map((category, index) => {
            return (
              <div
                className="categories-container"
                key={category.id}
                css={css`
                  max-width: 270px;
                `}
              >
                <div className="category">
                  <div className="cat-image">
                    <div className="cat-image-div">
                      <img css={style.borderRadius}
                        src={category.image}
                        width="270px"
                        height="270px"
                        alt={category.imageAlt}
                      />
                    </div>
                    <div className="cat-about">
                      <p css={style.paraStyle}>{category.name}</p>
                      <p css={style.textCentre}>{category.about}</p>
                    </div>
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
