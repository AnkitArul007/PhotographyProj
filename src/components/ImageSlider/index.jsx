/* eslint-disable react/no-unknown-property */
import { css, keyframes } from "@emotion/react";
import Typewriter from "typewriter-effect";
import "./typewriter.css";
import useListenScreenSize from "../../hooks/useListenScreenSize";
import { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";

const slide = keyframes`
10% {
    opacity: 1;
  }
  20% {
    opacity: 1;
  }
  30% {
    opacity: 0;
  }
  40% {
    transform: scale(1.1);
  }
`;

const style = {
  main: css`
    width: 100%;
    min-height: 100vh;
    height: 100vh;
    overflow: hidden;
    position: relative;
    background-color: #000;
  `,
  textOverlay: css`
    background: transparent;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    color: #fff;
    font-size: 4.5rem;
    overflow: visible;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  textOverlayInner: css`
    width: 50%;
    height: 50%;
    margin: 0 auto;
    background: rgba(0, 0, 0, 0);
    color: #fff;
    font-weight: 800;
    white-space: wrap;
    span.Typewriter__wrapper {
      font-family: "Dancing Script", cursive !important;
      line-height: 76px;
      font-size: 76px;
      font-weight: 500;
    }
    span.Typewriter__cursor {
      font-family: "Dancing Script", cursive !important;
      line-height: 64px;
      font-size: 64px;
      font-weight: 500;
    }

    @media screen and (max-width: 768px) {
      span.Typewriter__wrapper {
        line-height: 56px;
        font-size: 56px;
        font-weight: 500;
      }

      span.Typewriter__cursor {
        line-height: 64px;
        font-size: 64px;
        font-weight: 500;
      }
    }

    @media screen and (max-width: 640px) {
      span.Typewriter__wrapper {
        line-height: 48px;
        font-size: 48px;
        font-weight: 400;
      }

      span.Typewriter__cursor {
        line-height: 48px;
        font-size: 48px;
        font-weight: 400;
      }
    }

    @media screen and (max-width: 360px) {
      span.Typewriter__wrapper {
        line-height: 36px;
        font-size: 36px;
        font-weight: 400;
      }

      span.Typewriter__cursor {
        line-height: 36px;
        font-size: 36px;
        font-weight: 500;
      }
    }
  `,
  animationDiv: css`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
  `,
  // div: css`
  //   animation: ${slide} 25s infinite;
  //   &:nth-child(2) {
  //     animation-delay: 5s;
  //   }
  //   &:nth-child(3) {
  //     animation-delay: 10s;
  //   }
  //   &:nth-child(4) {
  //     animation-delay: 15s;
  //   }
  //   &:nth-child(5) {
  //     animation-delay: 20s;
  //   }
  // `,
  overlayText: css`
    background: transparent !important;
    color: #fff;
    font-weight: 800;
  `,
};

const ImageSlider = () => {
  const { data: HeroImagesData, loading, postData } = useFetch();
  const { screenWidth, suggestImageWidthToTake } = useListenScreenSize();
  console.log("Screen Width", suggestImageWidthToTake());
  const fetchImages = () => {
    const url = `${import.meta.env.VITE_ROOT_URL}/carousel/getAll`;
    postData(url, { w: suggestImageWidthToTake() }, "POST");
  };

  useEffect(() => {
    let demoVar = true;
    if (demoVar) {
      fetchImages();
    }
    return () => demoVar = false;
  }, [screenWidth]);

  return (
    <>
      <div css={style.main}>
        {!loading && HeroImagesData !== null && (
          <>
            {HeroImagesData?._data?.data.map((image, i, arr) => (
              <div
                key={image.id}
                css={css`
                  width: 100%;
                  height: 100%;
                  background-size: cover;
                  background-position: center;
                  background-repeat: no-repeat;
                  position: absolute;
                  top: 0;
                  right: 0;
                  bottom: 0;
                  left: 0;
                  opacity: 0;
                  animation: ${slide} ${arr.length * 5}s infinite;
                  animation-delay: ${i * 5}s;
                `}
                style={{ backgroundImage: `url(${image.image_url})` }}
              ></div>
            ))}
          </>
        )}
      </div>

      {/* typer writer effect */}
      <div css={style.textOverlay}>
        <div css={style.textOverlayInner}>
          <Typewriter
            style={{
              background: "transparent !important",
              fontFamily: "'Dancing Script', cursive",
            }}
            options={{
              strings: [
                "Welcome to Rushalk Creation",
                "Where Every Picture Tells a Story",
                "Moments Captured, Emotions Preserved",
                "We Craft Visual Narratives for Every Occasion",
                "Your Story, Captured Through Our Lens",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
