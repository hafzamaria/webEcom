import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Styles/Button";

const HeroSection = ({myData}) => {
 
  const {name ,image} = myData;

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1>{name} </h1>
            <p className="para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              atque temporibus veniam doloribus libero ad error omnis voluptates
              animi! Suscipit sapiente.
            </p>
            <NavLink>
              <Button>shop now</Button>
            </NavLink>
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image">
            <figure>
              <img
                src={image}
                alt="hero-section-photo"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
padding: 12rem 0;
.container{
  max-width: 80rem;
    gap: 5rem
}
.grid{
  gap: 5rem;
}
.para{
  font-size:1.25rem;
}
.intro-data{
  font-size:1.5rem;
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
    font-size:4rem;
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