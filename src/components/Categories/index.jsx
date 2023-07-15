/* eslint-disable react/no-unknown-property */
import { css } from "@emotion/react";
import { categoryData } from "../../database/cataegories/categories";

const style = {
  textDiv: css`
  margin-top: 4px;
  `,
  categoryName: css`
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  margin-top: 18px;
  `,
  categoryAboutText: css`
  text-align: center;
  font-size: 12px;
  `,
  categoryImage: css`
  // border-top-left-radius: 4px;
  // border-top-right-radius: 4px;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  `,
  imageDiv: css`
  height: 270px;
  width: 270px;
  border-radius: 50%;
  object-fit: contain;
  `,
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
                key={category.id}
                css={css`
                  max-width: 270px;
                  margin-top: 28px;
                `}
                style={{background:"var(--golden-bg)"}}
              > 
                {/* image card container */}
                  <div>
                    <div css={style.imageDiv}>
                      <img css={style.categoryImage}
                        src={category.image}
                        alt={category.imageAlt}
                      />
                    </div>

                    {/* text para below image */}
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
