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
    const url = "http://localhost:8002/api/v1/images/get";
    const res = await fetch(url, { 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ w: 500 })
    
    });
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await imageFetch();
      setImages(data._data.data);
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
          {images.map((image) => (
            <ImagesCards key={image.id} url={image.image_url} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Images;
