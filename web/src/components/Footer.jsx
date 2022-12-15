import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Styles/Button";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div className="heading">
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>

          <div>
            <NavLink to="/Contact">
              <Button>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>
      {/* footer section */}
      <footer>
        <div className="footer-container">
          <div className="footer-about">
            <h3>Hafza Maria</h3>
            <p>I am junior MERN Stack developer. </p>
          </div>
          {/* 2nd column */}
          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <br />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
          {/* 3rd column */}
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social--icons">
              <div>
                <a
                  href="https://www.facebook.com/profile.php?id=100006701534638"
                  target="_blank"
                >
                  <FaFacebookF className="icons" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/mariahussainjamal/"
                  target="_blank"
                >
                  <FaInstagram className="icons" />
                </a>
              </div>
              <div>
                <a href="https://github.com/hafzamaria" target="_blank">
                  <FaGithub className="icons" />
                </a>
              </div>
            </div>
          </div>
          {/* 4th column */}
          <div className="footer-contact">
            <h3>Call Us</h3>
            {/* tel is a keyword for making cal */}
            <a  href="tel:+923332296495"className="call">+923332296495</a>
          </div>
        </div>

        {/* bottom section */}
        <div className="footer-bottom--section">
          <hr />
          <div className="footer-bottom-flex">
            <p>@{new Date().getFullYear()} HafzaMaria. All Rights Reserved</p>
            <div className="policy">
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};
const Wrapper = styled.section`
.call{
  font-size:2rem;
  color:white;
}
.footer-container{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-items: baseline;
    gap: 7rem;
}
.footer-about{
  width: 16rem;
}
.footer-subscribe{
  width:25rem;
}
.contact-short {
  max-width:60vw;
  margin: auto;
  padding:4rem 10rem;
  background-color:${({ theme }) => theme.colors.bg};
  border-radius:1rem;
  box-shadow: ${({ theme }) => theme.colors.shadowSupport};
  transform:translateY(50%);
  box-shadow: 1px 0px 3px  lightgray;
  justify-content:space-between;
 
      


  .grid{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
  }
 

  .grid div:last-child{
    justify-self:end;
    align-self:center;
  }
}
footer{
  padding:10rem 0 9rem 0;
  background-color:${({ theme }) => theme.colors.footer_bg};

  h3{
    color:${({ theme }) => theme.colors.hr};
    margin-bottom:2.4rem;
  
  }
  p{
    color:white;
  }
  .footer-social--icons{
    display:flex;
    gap:2rem;

    div{
      padding:1rem;
      border-radius: 50%;
      border: 2px solid white;

      .icons{
        color:white;
       font-size:2.4rem;
       position:relative
       cursor:pointer;
      }
    }
  }
 
  .footer-bottom--section{
    padding-top:5rem;
 

.footer-bottom-flex{
  display:flex;
  flex-direction:row;
  justify-content:center;
   gap:3rem;
  margin-bottom: -6rem;
}
    hr{
      margin-bottom:2rem;
      color:${({ theme }) => theme.colors.hr};
      height:0.1px;
    }
   
  }
}

@media (max-width:${({ theme }) => theme.media.tab}){
 
  .footer-container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: ;
    padding: 20px;
    -webkit-flex-direction: row;
  }
  .footer-bottom-flex{
  
    gap: 3rem;
  }
  .footer-bottom-flex{
    display: flex;
    justify-content: center;
    gap: ;
  }
}
}

@media (max-width:${({ theme }) => theme.media.mobile}){
  .footer-container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    margin-bottom: -5rem;
    
    .footer-subscribe{
      width: 19rem;
    }
    .footer-contact{
      width: 19rem;
    }
  }
  .contact-short{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding:2rem 6rem;
    .grid{
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
    .heading{
      width:13rem;
      
      h3{
        font-size:1rem;
        padding:3px;
       
      }
    }
    }
    
  }


`;

export default Footer;
