import { css } from "@emotion/react"
import BlogCard from "./BlogCard"

const style = {
  wdGridMain: css`
  width: 100%;
  margin: 0 auto;
  max-width: 1400px;
  `,
  wdGridContainer: css`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-template-rows: auto;
  column-gap: 3rem;
  row-gap: 3rem;
  `,
}

const mockData  = [
  {
    id: 1,
    bride: "Julia",
    groom: "Aditya",
    city: "London",
    country: "UK",
    img: "w1.jpg"
  },
  {
    id: 2,
    bride: "Ankita",
    groom: "Ankit",
    city: "Dubai",
    country: "UAE",
    img: "w2.jpg"
  },
  {
    id: 3,
    bride: "Priya",
    groom: "Vijay",
    city: "Udaipur",
    country: "India",
    img: "w3.jpg"
  },
  {
    id: 4,
    bride: "Vaishnavi",
    groom: "Vaibhav",
    city: "Bali",
    country: "Indonesia",
    img: "w4.jpg"
  },
  {
    id: 8,
    bride: "Vaishnavi",
    groom: "Vaibhav",
    city: "Bali",
    country: "Indonesia",
    img: "w4.jpg"
  },
  {
    id: 5,
    bride: "Julia",
    groom: "Aditya",
    city: "London",
    country: "UK",
    img: "w1.jpg"
  },
  {
    id: 6,
    bride: "Ankita",
    groom: "Ankit",
    city: "Dubai",
    country: "UAE",
    img: "w2.jpg"
  },
  {
    id: 7,
    bride: "Priya",
    groom: "Vijay",
    city: "Udaipur",
    country: "India",
    img: "w3.jpg"
  },
]

const WeddingGrid = () => {
  return (
    <div css={style.wdGridMain}>
      <div css={style.wdGridContainer}>
        {
          mockData.map((info) => (
            <BlogCard key={info.id} weddingInfo={info} />
          ))
        }
      </div>
    </div>
  )
}

export default WeddingGrid