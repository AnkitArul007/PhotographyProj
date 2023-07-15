import React from 'react'

<<<<<<< Updated upstream
export default function ContactUs () {
  return (
    <>
        <div>
            
=======
const style = {
  main: css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 1;
  `,
  modal: css`
    position: relative;
    width: 480px;
    height: 460px;
    border-radius: 8px;
    padding: 16px;
    z-index: 1;
    border: 1px solid grey;
    background-color: #fff;
    // box-shadow: 4px 4px 10px #888;
    backdrop-filter: blur(5px);
  `,
  close: css`
    display: block;
    position: absolute;
    top: 4px;
    right: 8px;
    padding: 4px;
    cursor: pointer;
    background-color: #fff;
  `,
  content: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #fff;
  `,
  heading: css`
    text-align: center;
    background: color: #fff;
  `,
};

export default function ContactUs() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div css={style.main}>
        <div css={style.modal}>
          <div css={style.close} >
            <AiOutlineClose size={20} style={{ backgroundColor: "#fff" }} onClick={() => setOpen(false)} />
          </div>
          <div css={style.content}>
            <div css={style.heading}>
              <h1>Contact Us</h1>
            </div>
            <div>
              <Form />
            </div>
          </div>
>>>>>>> Stashed changes
        </div>
    </>
  )
}
