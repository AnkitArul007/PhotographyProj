import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { IoIosShareAlt } from "react-icons/io";
import { useRef, useState } from "react";

const style = {
  vidMain: css`
    width: 100%;
    max-width: 920px;
    min-width: 920px;
    height: auto;
    max-height: 520px;
    margin: 0 auto;
    position: relative;
  `,
  video: css`
    width: 100%;
    height: auto;
    display: block;
  `,
  shareLink: css`
    display: block;
    text-decoration: none !important;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10;
    text-align: center;
    color: #ffffff;
    background: transparent;
  `,
  playBtn: css`
    position: absolute;
    top: 47.5%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0.5rem 1rem;
    font-size: 2rem;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: rgba(0, 0, 0, 0.7);
    }
  `,
};

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div css={style.vidMain} className="my-5">
      <Link to={`mailto:?subject=&body=`} title="Share" css={style.shareLink}>
        <IoIosShareAlt
          color="#fff"
          style={{ background: "transparent", color: "#fff" }}
          size={18}
        />
      </Link>
      <video css={style.video} controls={true} ref={videoRef}>
        <source src="" type="video/mp4" />
        Your browser does not the video format
      </video>
      <button css={style.playBtn} onClick={handlePlay}>
        ►
      </button>
    </div>
  );
};

export default VideoPlayer;
