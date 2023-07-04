import React, { useState } from "react";
import ImagesCards from "./components/ImagesCards";
import { useEffect } from "react";
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
      <div className="container">
        <SectionHeaders pagetitle={"Images"} />
        <div className="container d-flex flex-wrap justify-content-center align-items-center gap-4">
          {images.slice(0, 101).map((item, id) => (
            <ImagesCards key={id} url={item.url} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Images;
