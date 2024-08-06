import { useState } from "react";
import styled from "styled-components";
import { BiPlusMedical } from "react-icons/bi";
import { FaMinus } from "react-icons/fa";
const UseStateHook = () => {
    const [first, setfirst] = useState(1);
    
  return (
    <>
    <Wrapper>
        <div className="container">
     
        <button onClick={()=>(first === 0 ? setfirst(0) : setfirst(first -1))}>

            <FaMinus className="icon minus_icon" />
          </button>
            <h1>{first}</h1>
            <button onClick={()=> setfirst(first +1)}>
            <BiPlusMedical className="icon" />
          </button>
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  .container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4.8rem;
  }
  .icon {
    font-size: 2rem;
  }

  h1 {
    font-size: 5.4rem;
    color: #2e86c1;
  }
`

export default UseStateHook