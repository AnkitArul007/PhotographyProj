/* eslint-disable react/no-unknown-property */
import React from "react";
import { css } from "@emotion/react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section css={style.serviceSection}>
      <div css={style.servicesContainer}>
        <ServiceCard serviceName={"Photography"} icon={"camera"} />
        <ServiceCard serviceName={"Videography"} icon={"video"} />
        <ServiceCard serviceName={"Editing"} icon={"brush"} />
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
