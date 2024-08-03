import React, { useEffect, useState } from 'react'

const useListenScreenSize = () => {
    const [screenWidth, setScreenWidth] = useState(0)
    let EXTRA_LARGE = 1500
    let LARGE = 1000
    let MEDIUM = 500
    let SMALL = 300


    console.log("useListenScreenSize")

    const suggestImageWidthToTake = () => {
        if (screenWidth >= EXTRA_LARGE) {
            return EXTRA_LARGE
        }
        else if (screenWidth >= LARGE) {
            return LARGE
        }
        if (screenWidth >= MEDIUM) {
            return MEDIUM
        }
        return SMALL
    }
    useEffect(() => {
        setScreenWidth(window?.innerWidth)
        window.addEventListener("resize", () => {
            setScreenWidth(window?.innerWidth)
        })
        return () => {
            window.removeEventListener("resize", () => {
                setScreenWidth(0)
            })
        }
    }, [])
    return {
        screenWidth,
        suggestImageWidthToTake
    }
}



export default useListenScreenSize