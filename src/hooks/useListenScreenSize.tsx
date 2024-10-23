import React, { useEffect, useState } from 'react'

const useListenScreenSize = () => {
    const [screenWidth, setScreenWidth] = useState(0)
    let EXTRA_LARGE = 1500
    let LARGE = 1000
    let MEDIUM = 500
    // let SMALL = 300
    const suggestImageWidthToTake = () => {
        if (screenWidth >= EXTRA_LARGE) {
            return 1800
        }
        else if (screenWidth >= LARGE && screenWidth < EXTRA_LARGE) {
            return 1200
        } else if (screenWidth >= MEDIUM && screenWidth < LARGE) {
            return 800
        } else {
            return 500
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