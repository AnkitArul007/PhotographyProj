/* eslint-disable react/no-unknown-property */
import { useEffect } from "react";
import { css } from "@emotion/react";
import "bootstrap/dist/css/bootstrap.css";
import SectionHeaders from "../../commonComponents/SectionHeaders";
import StoryCards from "./components/StoryCards";
import { useFetch } from "../../hooks/useFetch";
import useListenScreenSize from "../../hooks/useListenScreenSize";

export default function Stories() {
  // using states to set the active card
  // const [isActiveCard, setIsActiveCard] = useState(0);
  const { screenWidth, suggestImageWidthToTake } = useListenScreenSize();
  const { data, loading, postData } = useFetch();

  const fetchData = () => {
    const url = `${import.meta.env.VITE_ROOT_URL}/story/get`;
    postData(url, { w: suggestImageWidthToTake() });
  };

  useEffect(() => {
    let demoVar = true;
    if (demoVar) {
      fetchData();
    }
    return () => demoVar = false;
  }, []);

  useEffect(() => {
    fetchData();
  }, [screenWidth]);

  return !loading ? (
    <>
      <div className="container py-5 d-flex flex-column align-content-center justify-content-center">
        <SectionHeaders pagetitle={"stories"} />
        <div className="cardsWrapper  position-relative mt-5">
          <div
            className="cardsContainer row d-flex gap-5 justify-content-around"
            css={css`
              scroll-behavior: smooth;
            `}
          >
            {data?._data?.result.map((item, index) => (
              <StoryCards
                key={`${item.id}${index}`}
                title={item.title}
                clientName={item.client_name}
                city={item.city}
                country={item.country}
                story={item.description}
                highlightImageURL={item.highlight_image}
                url={item.thumbnail}
                id={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  ) : (
    <div
      css={css`
        width: 100%;
        height: 90vh;
        display: grid;
        place-items: center;
      `}
    >
      <div css={style.spinner}>
        <div css={style.spinner1}></div>
      </div>
    </div>
  );
}

const style = {
  spinner: css`
    background-image: linear-gradient(rgb(186, 66, 255) 35%, rgb(0, 225, 255));
    width: 100px;
    height: 100px;
    animation: spinning82341 1.7s linear infinite;
    text-align: center;
    border-radius: 50px;
    filter: blur(1px);
    box-shadow: 0px -5px 20px 0px rgb(186, 66, 255),
      0px 5px 20px 0px rgb(0, 225, 255);
  `,
  spinner1: css`
    background-color: rgb(0, 0, 0);
    width: 100px;
    height: 100px;
    border-radius: 50px;
    filter: blur(10px);

    @keyframes spinning82341 {
      to {
        transform: rotate(360deg);
      }
    }
  `,
};
