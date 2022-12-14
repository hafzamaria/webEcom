import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu, CgClose } from "react-icons/cg"; ////in react-icons go to css.gg last mai hai menu mai
import {FiShoppingCart} from "react-icons/fi";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false); /////for mob menu
  
        
  const Nav = styled.nav`
  .cart-trolley--link{
    position: relative;

    .cart-trolley{
      position: relative;
      font-size:3.2rem;
    }

    .cart-total--item{
      width:2.4rem;
      height:2.4rem;
      position: absolute;
      background-color:#000;
      color:#000;
      border-radius:50%;
      display: grid;
      place-items: center;
      top: -20%;
      left:70%;
      background-color: ${({ theme }) => theme.colors.helper};
    }
  }
    .navbar-list {
      display: flex;
      gap: 4.8rem;
      align-items:center;
      li {
        list-style: none;

        .navbar-link {
          &:link,
          &:visited {
            display: inline-block;
            text-decoration: none;
            font-size: 1.8rem;
            text-transform: uppercase;
            color: ${({ theme }) => theme.colors.black};
            transition: color 0.3s linear;
          }

          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.helper};
          }
        }
      }
    }
    .mobile-navbar-btn {
      display: none;

      .close-outline {
        display: none;
        margin-top: -13rem;
      }
    }

    .mobile-navbar-btn[name="close-outline"] {
      display: none;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 999;
        border: ${({ theme }) => theme.colors.black};

        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }

      .navbar-list {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        transform: translateX(100%);

        li {
          &.navbar-link {
            &:link,
            &:visited {
              font-size: 4.2rem;
            }

            &:hover,
            &:active {
              color: ${({ theme }) => theme.colors.helper};
            }
          }
        }
      }

      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }
      .active .close-outline {
        display: inline-block;
      }

      .active .navbar-list {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
      }
    }
  `;
  return (
    
      
           
          
    <Nav>
      {/* <div className="menuIcon active"> */}
      {/* ////for close &menu btn */}
      <div className={openMenu ? "menuIcon active" : "menuIcon"}>
        <ul className="navbar-list">
          <li >
            <NavLink className="navbar-link"  to="/"
            onClick={() => setOpenMenu(!openMenu)}
            activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
            className="navbar-link" 
            to="/About"
            onClick={() => setOpenMenu(!openMenu)}
            ClassName="active">About</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/Services"
            onClick={() => setOpenMenu(!openMenu)}
            ClassName="active">
              Services
            </NavLink>
          </li>
         
          
          <li>
            <NavLink className="navbar-link" to="/Products"
            onClick={() => setOpenMenu(!openMenu)}
            ClassName="active">
              Product
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/Contact"
            onClick={() => setOpenMenu(!openMenu)}
            ClassName="active">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link cart-trolley--link" to="/Cart"
            onClick={() => setOpenMenu(!openMenu)}
            ClassName="active">
              <FiShoppingCart className="cart-trolley "/> 
              <span className="cart-total--item">10</span>
            </NavLink>
          </li>
        </ul>
        {/* mobile-navbar-button */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setOpenMenu(true)}
          />
          <CgClose
            name="close-outline"
            className="close-outline mobile-nav-icon"
            onClick={() => setOpenMenu(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
