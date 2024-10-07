import React, { useEffect, useMemo, useState } from "react";
import PageWrapper from "../components/Common/PageWrapper";
import { useFetch } from "../hooks/useFetch";
import SectionHeaders from "../commonComponents/SectionHeaders";
import { css } from "@emotion/react";
import { useParams } from "react-router-dom";
import useListenScreenSize from "../hooks/useListenScreenSize";
import CategoryCard from "../components/Categories/CategoryCard";
import ImagesCards from "../components/ImageComponent/components/ImagesCards";
import ImageViewer from "../components/ImageComponent/ImageViewer";

const IndividualCategory = () => {
  const [images, setImages] = useState([]);
  const { id } = useParams();
  const { screenWidth, suggestImageWidthToTake } = useListenScreenSize();
  const { data, error, postData, loading } = useFetch();

  const [viewImage, setViewImage] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(null);
  const [currentImageURL, setCurrentImageURL] = useState("");

  const showImageView = (imageId) => {
    const currIdx = images.findIndex((img) => img.id === imageId);
    setCurrentIdx(currIdx);
    setCurrentImageURL(() => updateURL(images[currIdx].image_url));
    setViewImage(true);
    console.log("curr idx: ", currIdx);
  };

  const updateURL = (currentUrl) => {
    const urlPart = currentUrl.split("/w")[0];
    const newUrl = `${urlPart}/w=${suggestImageWidthToTake()},f=webp`;
    return newUrl;
  };

  const handleNext = () => {
    if (currentIdx < (images.length - 1)) {
      setCurrentIdx(idx => idx + 1);
      console.log("curr Idx", currentIdx);
    } else {
      setCurrentIdx(images.length - 1);
    }
    setCurrentImageURL(() => updateURL(images[currentIdx].image_url));
  };

  const handlePrevious = () => {
    if (currentIdx > 0) {
      setCurrentIdx(idx => idx - 1);
      console.log("curr Idx", currentIdx);
    } else {
      setCurrentIdx(0);
    }
    setCurrentImageURL(() => updateURL(images[currentIdx].image_url));
  };

  const closeImageView = () => {
      setViewImage(false);
      setCurrentIdx(null);
  };

  useEffect(() => {
    const url = `${import.meta.env.VITE_ROOT_URL}/images/get?catId=${id}`;
    postData(url, { w: suggestImageWidthToTake() });
  }, [screenWidth, id]);

  useEffect(() => {
    if(Array.isArray(data?._data?.data) && data?._data?.data.length > 0) {
        setImages(data?._data?.data);
    }
  } ,[data])

  const category_name = useMemo(() => {
    if (Array.isArray(data?._data?.data) && data?._data?.data.length > 0) {
      return data?._data?.data[0].category_name;
    }
    return "";
  }, [data]);

  return (
    <PageWrapper isLoading={loading}>
      <div className="container my-5">
        <SectionHeaders pagetitle={category_name} />
        <div
          className="container d-flex flex-wrap justify-content-center align-items-center gap-4"
        >
          {data?._data?.data?.map((category) => {
            return (
              <ImagesCards
                key={category.id}
                imageId={category.id}
                url={category.image_url}
                showImageView={showImageView}
              />
            );
          })}
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
    </PageWrapper>
  );
};

export default IndividualCategory;
