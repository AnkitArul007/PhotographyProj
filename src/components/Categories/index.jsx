/* eslint-disable react/no-unknown-property */
import { css } from "@emotion/react";
import { categoryData } from "../../database/cataegories/categories";
import SectionHeaders from "../../commonComponents/SectionHeaders";
import CategoryCard from "./CategoryCard";
import useListenScreenSize from '../../hooks/useListenScreenSize';
import { useFetch } from '../../hooks/useFetch';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
}


export default function Categories() {

  const { screenWidth, suggestImageWidthToTake } = useListenScreenSize()

  const { data, error, postData, loading } = useFetch()
  useEffect(() => {
    const url = `${import.meta.env.VITE_ROOT_URL}/category/get`
    postData(url, { 'w': suggestImageWidthToTake() })
  }, [screenWidth])

  return (
    <>
      <section
        className="my-5"
        css={css`
          display: block;
          padding: 60px;
          font-family: 'Julius Sans One', sans-serif !important;
        `}
      >
        <div className="pb-5">
          <SectionHeaders pagetitle={"Categories"} />
        </div>
        <div css={style.mainDiv}>
          {data?._data?.data?.map((category, index) => {
            return (
              <CategoryCard
                id={category?.id ?? ""}
                imageUrl={category?.thumbnail ?? ""}
                key={index}
                categoryName={category?.category_name ?? ""}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
