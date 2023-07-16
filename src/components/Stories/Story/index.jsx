/* eslint-disable react/no-unknown-property */
import React from "react";
import { css } from "@emotion/react";
import { imageGroupData } from "../../../database/stories/groupImageData";
import ImageGroup from "../Imagegroup";

export default function Story() {

      // laoder falg
      const [flag, setFlag] = React.useState(false);

      React.useEffect(() => {
        setTimeout(() => {
          setFlag(true);
        }, 1000);
        return () => {
          console.log("hello");
        };
      }, []);
  return (
   flag ? (
    <>
    {/* detailed story */}
    <div>
      {/* story title */}
      <div className="text-center mx-auto mt-2 p-3">
        <h1 className="metallic-text-grad pt-2">SEALED</h1>
        <p
          style={{
            fontFamily: `'Julius Sans One', sans-serif`,
            fontSize: `var(--xs-text)`,
            letterSpacing: "2px",
          }}
        >
          SIDDHARTH & AKKI
        </p>
        <p style={{ fontSize: `var(--xs-text)`, letterSpacing: "1px" }}>
          Dec 2050 | Gwalior, India
        </p>
      </div>

      <div className="p-3">
        {/* story banner image */}
        <div className="d-flex align-content-center justify-content-center">
          <img
            css={css`
              width: 100%;
              object-fit: cover;
            `}
            src="https://images.squarespace-cdn.com/content/v1/5c9dc168c46f6d4367f37a90/3d48b24d-4715-4347-a79f-420d9e65b577/---+Banner.jpg?format=1500w"
            alt="story banner"
          />
        </div>
        {/* story text */}
        <div className="p-5">
          <p css={css`font-family: 'Julius Sans One', sans-serif; font-size: var(--xs-text)`} className="text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
            nobis voluptatum corrupti perferendis excepturi odit ratione esse
            hic quidem accusantium, dolore, ex necessitatibus ut impedit vel
            neque, expedita et! Veritatis. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Necessitatibus at harum impedit, hic
            ullam cum ex earum perferendis sapiente debitis illo eveniet quod
            illum nihil odio quos. Quam, eligendi? Sunt. Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Voluptates dolorum ad
            aliquid dolore recusandae deleniti? Ducimus, laudantium dolorem
            nostrum veniam iste eius quo vel sit quasi aspernatur maiores eos
            est.
          </p>
          
          <p css={css`font-family: 'Julius Sans One', sans-serif; font-size: var(--xs-text)`} className="text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
            nobis voluptatum corrupti perferendis excepturi odit ratione esse
            hic quidem accusantium, dolore, ex necessitatibus ut impedit vel
            neque, expedita et! Veritatis. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Necessitatibus at harum impedit, hic
            ullam cum ex earum perferendis sapiente debitis illo eveniet quod
            illum nihil odio quos. Quam, eligendi? Sunt. Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Voluptates dolorum ad
            aliquid dolore recusandae deleniti? Ducimus, laudantium dolorem
            nostrum veniam iste eius quo vel sit quasi aspernatur maiores eos
            est.
          </p>
          <p css={css`font-family: 'Julius Sans One', sans-serif; font-size: var(--xs-text)`} className="text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
            nobis voluptatum corrupti perferendis excepturi odit ratione esse
            hic quidem accusantium, dolore, ex necessitatibus ut impedit vel
            neque, expedita et! Veritatis. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Necessitatibus at harum impedit, hic
            ullam cum ex earum perferendis sapiente debitis illo eveniet quod
            illum nihil odio quos. Quam, eligendi est.
          </p>
          <p css={css`font-family: 'Julius Sans One', sans-serif; font-size: var(--xs-text)`} className="text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
            nobis voluptatum corrupti perferendis excepturi odit ratione esse
            hic quidem accusantium, dolore, ex necessitatibus ut impedit vel
            neque, expedita et! Veritatis. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Necessitatibus at harum impedit, hic
            ullam cum ex earum perferendis sapiente debitis illo eveniet quod
            illum nihil odio quos. Quam, eligendi? Sunt. Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Voluptates dolorum ad
            aliquid dolore recusandae deleniti? Ducimus, laudantium dolorem
            nostrum veniam iste eius quo vel sit quasi aspernatur maiores eos
            est.
          </p>
          <p css={css`font-family: 'Julius Sans One', sans-serif; font-size: var(--xs-text)`} className="text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
            nobis voluptatum corrupti perferendis excepturi odit ratione esse
            hic quidem accusantium, dolore, ex necessitatibus ut impedit vel
            neque, expedita et! Veritatis. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Necessitatibus at harum impedit, hic
            ullam cum ex earum perferendis sapiente debitis illo eveniet quod
            illum nihil odio quos. Quam, eligendi? Sunt. Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Voluptates dolorum ad
            aliquid dolore recusandae deleniti? Ducimus, laudantium dolorem
            nostrum veniam iste eius quo vel sit quasi aspernatur maiores eos
            est.
          </p>
        </div>
      </div>


      {
        imageGroupData.map((item, index) => {
          return <ImageGroup key={index} title={item.title} images={item.images} />
        })
      }
    </div>
  </>
   ) : (
    <div
      css={css`
        width: 100%;
        height: 90vh;
        display: grid;
        place-items: center;
      `}>
      <div css={style.spinner}>
        <div css={style.spinner1}></div>
      </div>
    </div>
   )
  );
}


const style = {
  spinner: css`
    background-image: linear-gradient(rgb(186, 66, 255) 35%, rgb(0, 225, 255));
    width: 100px;
    height: 100px;
    animation: spinning82341 1.7s linear infinite;
    text-align: center;
    border-radius: 50px;
    filter: blur(1px);
    box-shadow: 0px -5px 20px 0px rgb(186, 66, 255),
      0px 5px 20px 0px rgb(0, 225, 255);
  `,
  spinner1: css`
    background-color: rgb(0, 0, 0);
    width: 100px;
    height: 100px;
    border-radius: 50px;
    filter: blur(10px);

    @keyframes spinning82341 {
      to {
        transform: rotate(360deg);
      }
    }
  `,
};

