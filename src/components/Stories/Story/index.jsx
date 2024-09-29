/* eslint-disable react/no-unknown-property */
import React, { useEffect } from "react";
import { css } from "@emotion/react";
import { imageGroupData } from "../../../database/stories/groupImageData";
import ImageGroup from "../Imagegroup";
import { useLocation } from "react-router-dom";
import useListenScreenSize from "../../../hooks/useListenScreenSize";
import { useFetch } from "../../../hooks/useFetch";

export default function Story() {
  const { state } = useLocation();
  // laoder falg
  const [flag, setFlag] = React.useState(false);
  const { screenWidth, suggestImageWidthToTake } = useListenScreenSize();
  const { data, loading, postData } = useFetch();

  React.useEffect(() => {
    setTimeout(() => {
      setFlag(true);
    }, 1000);
    return () => {
      console.log("hello");
    };
  }, []);

  // const getStory = () => {
  //   const url = `${import.meta.env.VITE_ROOT_URL}/story/get/${state.id}`;
  //   postData(url, { w: suggestImageWidthToTake });
  // };

  // useEffect(() => {
  //   let demoVar = true;
  //   if (demoVar) getStory();
  //   return (demoVar = false);
  // }, [screenWidth]);

  const getAllStoryImages = () => {
    const url = `${import.meta.env.VITE_ROOT_URL}/story-images/get/${state.id}`;
    postData(url, { w: suggestImageWidthToTake });
  };

  useEffect(() => {
    let demoVar = true;
    if (demoVar) {
      getAllStoryImages();
    }
    return (demoVar = false);
  }, [screenWidth]);



  return flag ? (
    <>
      {/* detailed story */}
      <div>
        {/* story title */}
        <div className="text-center mx-auto mt-2 p-3">
          <h1 className="metallic-text-grad pt-2">{state.title}</h1>
          <p
            style={{
              fontFamily: `'Julius Sans One', sans-serif`,
              fontSize: `var(--xs-text)`,
              letterSpacing: "2px",
            }}
          >
            {state.clientName}
          </p>
          <p style={{ fontSize: `var(--xs-text)`, letterSpacing: "1px" }}>
            {`Dec 2028 | ${state.city} | ${state.country}`}
          </p>
        </div>

        <div className="p-3">
          {/* story banner image */}
          <div className="d-flex align-content-center justify-content-center">
            <img
              css={css`
                width: 100%;
                object-fit: cover;
              `}
              src={state.highlightImageURL}
              alt="story banner"
            />
          </div>
          {/* story text */}
          <div className="p-5">
            <p
              css={css`
                font-family: "Julius Sans One", sans-serif;
                font-size: var(--xs-text);
              `}
              className="text-justify"
            >
              {state.description}
            </p>
          </div>
        </div>
        {!loading && data !== null && (
          <>
            {data?._data?.data.map((item, index) => {
              return (
                <ImageGroup
                  key={index}
                  title={item.title}
                  images={item.images}
                />
              );
            })}
          </>
        )}
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
