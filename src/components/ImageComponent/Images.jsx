/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import ImagesCards from "./components/ImagesCards";
import { useEffect } from "react";
import { css } from "@emotion/react";
import SectionHeaders from "../../commonComponents/SectionHeaders";


const Images = () => {
  const [images, setImages] = useState([]);
  const imageFetch = async () => {
    const url = "https://jsonplaceholder.typicode.com/photos";
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await imageFetch();
      setImages(data);
    };

    fetchData();
  }, []);
  console.log(images);
  return (
    <React.Fragment>
      <div className="container my-5">
        <SectionHeaders pagetitle={"Images"}/>
        <div className="container d-flex flex-wrap justify-content-center align-items-center gap-4"
        css={css`
        min-height: 100vh;
        `}
        >
          {images.slice(0, 101).map((item, id) => (
            <ImagesCards key={id} url={"https://ik.imagekit.io/7snzcosbh/default-image.jpg?updatedAt=1684176736985"} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Images;
