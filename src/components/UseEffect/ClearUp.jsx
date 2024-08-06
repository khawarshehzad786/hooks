/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import styled from "styled-components";

const ClearUp = () => {
  const [widthCount, setWidthCount] = useState(window.screen.width);

  const currentWidth =()=>{
    setWidthCount(window.innerWidth);
  }

  useEffect(() => {
   window.addEventListener("resize",currentWidth)
   return ()=>{
    window.removeEventListener("resize",currentWidth)
   }
  }, [])
  



  return (
    <Wrapper>
      <div className="container">
        <h2>
          The size of the window is <span> {widthCount} </span>
        </h2>
      </div>
    </Wrapper>
  );
};
ClearUp;
const Wrapper = styled.section`
  .container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h2 {
    line-height: 5.2rem;
    font-size: 4.2rem;
  }
  span {
    color: #2e86c1;
  }
`;

export default ClearUp;