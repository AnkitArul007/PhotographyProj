/* eslint-disable react/no-unknown-property */
import React from "react";
import { css } from "@emotion/react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section css={style.serviceSection}>
      <div css={style.servicesContainer}>
        <ServiceCard
          serviceName={"Photography"}
          icon={"camera"}
          text={
            "Anand's photography captures moments with precision and artistry, transforming ordinary scenes into striking visual stories. His expertise spans various genres, from weddings to sports and wildlife, delivering impactful and memorable images."
          }
        />
        <ServiceCard
          serviceName={"Films"}
          icon={"video"}
          text={
            "Anand's filmmaking expertise brings compelling stories to life with a perfect blend of creativity and technical mastery. His diverse experience spans short films, documentaries, and music videos, delivering captivating, visually stunning narratives."
          }
        />
        <ServiceCard
          serviceName={"Documentaries"}
          icon={"brush"}
          text={
            "Anand's documentary work showcases real-life stories with depth and authenticity. His keen eye for detail and storytelling ability create powerful narratives that resonate deeply, making complex subjects engaging and visually compelling."
          }
        />
      </div>
    </section>
  );
};

export default Services;

const style = {
  serviceSection: css`
    margin: 0 auto;
    margin-bottom: 98px;
  `,
  servicesContainer: css`
    width: 100%;
    max-width: 1040px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  `,
};
