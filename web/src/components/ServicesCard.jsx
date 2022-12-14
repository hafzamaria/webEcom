// import React ,{useContext}from 'react'
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Styles/Button";
// import {AppContext} from '../Context';
import { useGlobalContext } from "../Context";

const ServicesCard = () => {
  // const firstName = useContext(AppContext) instead of this we call useGlobalContext from Context.jsx
  //  &also dnt need to import AppContext ans useContext
  // const firstName = useGlobalContext();
  const { name, image } = useGlobalContext();
  return (
    <Wrapper className="section">
      <h2 className="common-heading">Our Services</h2>
      <div className="main-container">
        <div className="container grid grid-three-coloumn">
          <div className="card">
            <figure>
              <img src="./image/hero.jpg" alt="" />
            </figure>
            <div className="card-data">
              <h3>{name}</h3>
              <p>
                I am {name}.A Full Stack Developer,YouTuber and Freelancer. A
                Full Stack Developer,YouTuber and Freelancer.
              </p>
              <NavLink to="/About">
                <Button className="btn">Read More</Button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="container grid grid-three-coloumn">
          <div className="card">
            <figure>
              <img src="./image/logo.jpg" alt="" />
            </figure>
            <div className="card-data">
              <h3>{name}</h3>
              <p>
                I am {name}.A Full Stack Developer,YouTuber and Freelancer. A
                Full Stack Developer,YouTuber and Freelancer.
              </p>
              <NavLink to="/About">
                <Button className="btn">Read More</Button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="container grid grid-three-coloumn">
          <div className="card">
            <figure>
              <img src="./image/hero2.jpg" alt="" />
            </figure>
            <div className="card-data">
              <h3>{name}</h3>
              <p>
                I am {name}.A Full Stack Developer,YouTuber and Freelancer. A
                Full Stack Developer,YouTuber and Freelancer.
              </p>
              <NavLink to="/About">
                <Button className="btn">Read More</Button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="container grid grid-three-coloumn">
          <div className="card">
            <figure>
              <img src="./image/about1.jpg" alt="" />
            </figure>
            <div className="card-data">
              <h3>{name}</h3>
              <p>
                I am {name}.A Full Stack Developer,YouTuber and Freelancer. A
                Full Stack Developer,YouTuber and Freelancer.
              </p>
              <NavLink to="/About">
                <Button className="btn">Read More</Button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="container grid grid-three-coloumn">
          <div className="card">
            <figure>
              <img src="./image/services.png" alt="" />
            </figure>
            <div className="card-data">
              <h3>{name}</h3>
              <p>
                I am {name}.A Full Stack Developer,YouTuber and Freelancer. A
                Full Stack Developer,YouTuber and Freelancer.
              </p>
              <NavLink to="/About">
                <Button className="btn">Read More</Button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="container grid grid-three-coloumn">
          <div className="card">
            <figure>
              <img src="./image/about.webp" alt="" />
            </figure>
            <div className="card-data">
              <h3>{name}</h3>
              <p>
                I am {name}.A Full Stack Developer,YouTuber and Freelancer. A
                Full Stack Developer,YouTuber and Freelancer.
              </p>
              <NavLink to="/About">
                <Button className="btn">Read More</Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0;
  background-colod: ${({ theme }) => theme.colors.bg} .container {
    max-width: 80rem;
  }
  .main-container {
    display: flex;
    align-items: center;
    justify-content: center;
   width: 100%;
    flex-direction: row;
    flex-wrap: wrap;

    gap: 2rem;
  }
  .card {
    border: 0.1rem solid rgba(170 170 170 /40%);
    width: 35rem;
    .card-data {
      padding: 0 2rem;
    }
    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 /0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);
      font-size: 1.4 rem;
      &:hover {
        background-color: rgb(98 84 243);
        color: #fff;
      }

      a {
        color: rgb(98 84 243);
      }
    }
  }
  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .main-container {
      padding: 0 3.2rem;
      width: 100%;
    }
    .card {
      width: 100%;
      figure {
        width: 100%;
        img {
          width: 90%;
          height: auto;
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 3.2rem;
    }
    .grid-two-coloumn,
    .grid-three-coloumn,
    .grid-four-coloumn {
      grid-template-columns: 1fr 1fr;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .card {
        max-width: 100%;
      }
    }
  }
`;

export default ServicesCard;
