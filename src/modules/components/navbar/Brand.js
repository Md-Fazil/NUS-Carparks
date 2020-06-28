import React from 'react'
import styled from "styled-components";

import logo from "../../assets/Logo3.png";

const Brand = () => {
  return (

    <p style = {{fontSize: 24, fontWeight: 'bold',  color: 'white'}}
    ><i>PARK</i><span style ={{color:'#ff852e'}}>@NUS</span></p>
    
  )
}

export default Brand

const Image = styled.img`
width: 10%;
height: 110%;

`;
//<Image src={logo} alt="Company Logo" href= '/'/>