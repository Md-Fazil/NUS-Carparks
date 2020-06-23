import React from 'react'
import styled from "styled-components";

import logo from "../../assets/Logo.png";

const Brand = () => {
  return (
    <Image src={logo} alt="Company Logo" href= '/'/>
  )
}

export default Brand

const Image = styled.img`
width: 10%;
height: 110%;

`;
