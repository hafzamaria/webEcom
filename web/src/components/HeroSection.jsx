// import React ,{useContext}from 'react'
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Styles/Button";
// import {AppContext} from '../Context';
import { useGlobalContext } from "../Context";

const HeroSection = () => {
  // const firstName = useContext(AppContext) instead of this we call useGlobalContext from Context.jsx
  //  &also dnt need to import AppContext ans useContext
  // const firstName = useGlobalContext();
  const { name, image } = useGlobalContext();
  return (
    <div>
      <Wrapper>
        <div className="container grid grid-two-coloumn">
          <div className="section-hero-data">
            <p className="hero-top-data">Welcome to</p>
            <h1 className="hero-heading">{name}</h1>
            <p className="hero-para">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus itaque saepe nostrum neque, et est nihil commodi? Error nostrum eaque eveniet doloribus,
               sequi quam rem accusantium odio placeat deserunt? Ratione.
            </p>
            <Button className="btn hireme-btn">
              <NavLink to="/Products">SHOP NOW</NavLink>
            </Button>
          </div>
          <div className="hero-section-image">
            <figure>
              <img src={image} alt="" className="img-style" />
            </figure>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
const Wrapper = styled.section`
padding: 12rem 0;
.container{
  max-width: 80rem;
    gap: 5rem
}
p{
  font-size:1.25rem;
}
img {
  
  height: 10rem;
}
.hero-section-data {
  p {
    margin: 2rem 0;
  }
  h1 {
    text-transform: capitalize;
    font-weight: bold;
  }
  .intro-data {
    margin-bottom: 0;
  }
}
.btn{
  margin-top: 2rem;
}
.hero-heading{
  font-size:4rem;
}
.hero-section-image {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
figure {
  position: relative;
  &::after {
    content: "";
    width: 60%;
    height: 80%;
    background-color: rgba(81, 56, 238, 0.4);
    position: absolute;
    left: 50%;
    top: -5rem;
    z-index: -1;
  }
}
.img-style {
  width: 100%;
  height: auto;
  width: 360px;
}
  
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    
    .grid {
      gap: 10rem;
      margin-top:-7rem;
    }
    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;
