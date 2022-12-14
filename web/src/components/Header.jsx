import React from 'react'
import { NavLink } from 'react-router-dom'////page refresh kiye bagair dosre page pe jane k liye use hota h
import styled from 'styled-components';
import Navbar from './Navbar'
// import styled from 'styled-components';

const Header = () => {
  return (

<MainHeader>
    <NavLink to='/'>
        {/* <img src='./image/logo.jpg' alt='logo' className='logo'/> */}

        <h3>HafzaMaria</h3>
    </NavLink>
    <Navbar/>
</MainHeader>

  )
};

const MainHeader=styled.header`
padding: 0 4.8rem;
height: 7rem;
background-color: ${({theme})=>theme.colors.bg};
 display:flex;
 justify-content: space-between;
align-items: center;
position: relative;

.logo{
  height:auto;
  width:40%;
}
`;

export default Header
