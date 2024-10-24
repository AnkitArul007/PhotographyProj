/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import ImagesCards from "./components/ImagesCards";
import { useEffect } from "react";
import SectionHeaders from "../../commonComponents/SectionHeaders";
import ImageViewer from "./ImageViewer";
import useListenScreenSize from "../../hooks/useListenScreenSize";

const Images = () => {
  const [images, setImages] = useState([]);
  const [viewImage, setViewImage] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(null);
  const [currentImageURL, setCurrentImageURL] = useState("");
  const {suggestImageWidthToTake} = useListenScreenSize();


  const showImageView = (imageId) => {
    const currIdx = images.findIndex((img) => img.id === imageId);
    setCurrentIdx(currIdx);
    setCurrentImageURL(() => updateURL(images[currIdx].image_url));
    setViewImage(true);
  };

  const updateURL = (currentUrl) => {
    const urlPart = currentUrl.split("/w")[0];
    const newUrl = `${urlPart}/w=${suggestImageWidthToTake()},f=webp`;
    return newUrl;
  }

  const handleNext = () => {
    // setCurrentIdx((idx) => {
    //   const newIdx = idx < images.length - 1 ? idx + 1 : images.length - 1;
    //   setCurrentImageURL(() => updateURL(images[newIdx].image_url));  // Use newIdx
    //   return newIdx;
    // });

    if (currentIdx < images.length - 1) {
      setCurrentIdx((prevIdx) => prevIdx + 1);
    }

    // if (currentIdx < images.length - 1) {
    //   setCurrentIdx(idx => idx + 1);
    // } else {
    //   setCurrentIdx(images.length - 1);
    // }
    // setCurrentImageURL(() => updateURL(images[currentIdx].image_url));
  };

  const handlePrevious = () => {
    // setCurrentIdx((idx) => {
    //   const newIdx = idx > 0 ? idx - 1 : 0;
    //   setCurrentImageURL(() => updateURL(images[newIdx].image_url));  // Use newIdx
    //   return newIdx;
    // });

    if (currentIdx > 0) {
      setCurrentIdx((prevIdx) => prevIdx - 1);
    }

    // if (currentIdx > 0) {
    //   setCurrentIdx(idx => idx - 1);
    // } else {
    //   setCurrentIdx(0);
    // }
    // setCurrentImageURL(() => updateURL(images[currentIdx].image_url));
  };

  useEffect(() => {
    if (currentIdx !== null && images.length > 0) {
      setCurrentImageURL(updateURL(images[currentIdx].image_url));
    }
  }, [currentIdx, images]);

  const closeImageView = () => {
    setViewImage(false);
    setCurrentIdx(null);
  };

  const imageFetch = async () => {
    const url = `${import.meta.env.VITE_ROOT_URL}/best-images/getAll`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "w": 500 }),
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

  console.log(currentIdx)

  return (
    <React.Fragment>
      <div className="container my-5">
        <SectionHeaders pagetitle={"Images"} />
        <div className="container d-flex flex-wrap justify-content-center align-items-center gap-4 mt-5">
          {images.map((image) => (
            <ImagesCards
              key={image.id}
              url={image.image_url}
              imageId={image.id}
              showImageView={showImageView}
            />
          ))}
        </div>
      </div>
      {viewImage && (
        <ImageViewer
          currentImage={currentImageURL}
          close={closeImageView}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      )}
    </React.Fragment>
  );
};

export default Images;
