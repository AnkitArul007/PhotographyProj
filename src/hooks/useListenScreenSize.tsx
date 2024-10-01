import React, { useEffect, useState } from 'react'

const useListenScreenSize = () => {
    const [screenWidth, setScreenWidth] = useState(0)
    let EXTRA_LARGE = 1500
    let LARGE = 1000
    let MEDIUM = 500
    let SMALL = 300
    const suggestImageWidthToTake = () => {
        if (screenWidth >= EXTRA_LARGE) {
            return EXTRA_LARGE
        }
        else if (screenWidth >= LARGE && screenWidth < EXTRA_LARGE) {
            return LARGE
        } else if (screenWidth >= MEDIUM && screenWidth < LARGE) {
            return MEDIUM
        } else {
            return SMALL
        }
        // return Math.ceil(screenWidth);
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