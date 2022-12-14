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
            <p className="hero-top-data">THIS IS ME</p>
            <h1 className="hero-heading">{name}</h1>
            <p className="hero-para">
              I am {name}.A Full Stack Developer,YouTuber and Freelancer. A Full
              Stack Developer,YouTuber and Freelancer.
            </p>
            <Button className="btn hireme-btn">
              <NavLink to="/Contact">hire me</NavLink>
            </Button>
          </div>
          <div className="section-hero-image">
            <picture>
              <img src={image} alt="" className="hero-img" />
            </picture>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .btn {
    max-width: 16rem;
  }
  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }
  .hero-heading {
    text-transform: uppercase;
    font-size: 4.5rem;
  }
  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
    font-size: 1.3rem;
  }
  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  picture {
    text-align: center;
  }
  .hero-img {
    max-width: 100%;
  }
`;

export default HeroSection;
