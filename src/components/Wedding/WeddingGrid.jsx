/* eslint-disable react/no-unknown-property */
import { css } from "@emotion/react";
import BlogCard from "./BlogCard";
import { useFetch } from "../../hooks/useFetch";
import { useEffect } from "react";
import Spinner from "../../commonComponents/Spinner";

const style = {
  wdGridMain: css`
    width: 100%;
    margin: 0 auto;
    max-width: 1400px;
  `,
  wdGridContainer: css`
    margin: 0 auto;
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-template-rows: auto;
    column-gap: 2rem;
    row-gap: 2rem;
  `,
};

// const mockData = [
//   {
//     id: 1,
//     bride: "Julia",
//     groom: "Aditya",
//     city: "London",
//     country: "UK",
//     img: "w1.jpg",
//   },
// ];

const WeddingGrid = () => {
  const { data, postData } = useFetch();

  const fetchPreWeddingData = () => {
    const url = `${import.meta.env.VITE_ROOT_URL}/pre-wedding/get`;
    postData(url, {w: 800});
  }

  useEffect(() => {
    let demoVar = true;
    if(demoVar) {
      fetchPreWeddingData();
    }
    return () => demoVar = false
  }, []);

  return (
    <div css={style.wdGridMain}>
      <div css={style.wdGridContainer}>
        {data?._data?.data?.map((info) => (
          <BlogCard key={info.id} weddingInfo={info} />
        ))}
      </div>
    </div>
  );
};

export default WeddingGrid;
