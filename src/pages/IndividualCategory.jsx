import React, { useEffect, useMemo } from 'react'
import PageWrapper from '../components/Common/PageWrapper';
import { useFetch } from '../hooks/useFetch';
import SectionHeaders from "../commonComponents/SectionHeaders";
import { css } from "@emotion/react";
import { useParams } from 'react-router-dom';
import useListenScreenSize from '../hooks/useListenScreenSize';
import CategoryCard from '../components/Categories/CategoryCard';
import ImagesCards from '../components/ImageComponent/components/ImagesCards';


const IndividualCategory = () => {
    const { id } = useParams()
    const { screenWidth, suggestImageWidthToTake } = useListenScreenSize()

    const { data, error, postData, loading } = useFetch()
    useEffect(() => {
        const url = `${import.meta.env.VITE_ROOT_URL}/images/get?catId=${id}`
        postData(url, { 'w': suggestImageWidthToTake() })
    }, [screenWidth, id])
    const category_name = useMemo(()=>{
        if(Array.isArray(data?._data?.data) && data?._data?.data.length > 0){
            return data?._data?.data[0].category_name
        }
        return ""
    },[data])

    return (
        <PageWrapper isLoading={loading}>
            <div className="container my-5">
                <SectionHeaders pagetitle={category_name} />
                <div className="container d-flex flex-wrap justify-content-center align-items-center gap-4"
                    css={css`min-height: 100vh;`}
                >
                    {
                        data?._data?.data?.map((category) => {
                            return (
                                <ImagesCards  key={category.id} url={category.image_url} />
                            );
                        })
                    }
                </div>
            </div>
        </PageWrapper>
    )
}

export default IndividualCategory
