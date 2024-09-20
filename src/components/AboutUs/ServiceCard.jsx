import { css } from "@emotion/react";
import { FaCamera, FaVideo, FaPaintBrush } from "react-icons/fa";

const ServiceCard = ({ icon, serviceName }) => {
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
            Constituto percipitur ius, cu platonem mnesarchum nam. Nostrum
            vituperatoribus mea et, eu duo autem adipisci rationibus, eu nec
            assum aeterno omnesque.
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
