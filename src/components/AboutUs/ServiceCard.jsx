import { css } from "@emotion/react";
import { FaCamera, FaVideo, FaPaintBrush } from "react-icons/fa";

const ServiceCard = ({ icon, serviceName, text }) => {
  return (
    <div css={style.cardMain}>
      <div css={style.cardInner}>
        <div css={style.cardIcon}>
          {icon === "camera" && <FaCamera size={50} css={style.icon} />}
          {icon === "video" && <FaVideo size={50} css={style.icon} />}
          {icon === "brush" && <FaPaintBrush size={50} css={style.icon} />}
        </div>

        <div css={style.serviceName}>
          <h3 css={style.serviceHeading}>{serviceName}</h3>
        </div>
        <div css={style.serviceTextDiv}>
          <p css={style.servicetext}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

const style = {
  cardMain: css`
    width: 33.333%;
    margin: 0;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    // &:hover {
    //     transform: scale(1.05);
    //     box-shadow: 0 0 30px rgba(0, 0, 0, 0.2), 0 0 20px rgba(255, 255, 255, 0.6);
    // }
  `,
  cardInner: css`
    width: 100%;
    padding: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    justify-content: center;
  `,
  cardIcon: css`
    width: 100%;
    margin: 0 auto;
    margin-bottom: 16px;
    text-align: center;
  `,
  icon: css`
  color: #fff !important;
  `,
  serviceName: css`
    width: 100%;
    margin: 0 auto;
    margin-bottom: 16px;
  `,
  serviceHeading: css`
    font-weight: 700;
    font-size: 24px;
    line-height: 1.4;
  `,
  serviceTextDiv: css`
  flex-grow: 1;
  width: 100%;
  text-align: center;
  `,
  servicetext: css`
  width: 100%;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.8;
  `,
};
