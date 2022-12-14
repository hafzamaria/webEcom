import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false); ////step7

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  // step4
  const listenToScroll = () => {
    ///step5
    let heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    console.log(
      "~file:GoToTop.jsx ~ line 13 ~ listenToScroll ~ winScroll ",
      winScroll
    );
    ///step6
    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  //  step3
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);

    ///step9///this line hide the scroll button
    return window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    // step1
    <Wrapper>
      {isVisible && ( ///step8
        <div className="top-btn" onClick={goToBtn}>
          <FaArrowUp className="top-btn--icon" />
        </div>
      )}
    </Wrapper>
  );
};
// step2
const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  .top-btn {
    font-size: 2.4rem;
    width: 6rem;
    height: 6rem;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.btn};
    box-shadow: ${({ theme }) => theme.colors.shadow};
    border-radius: 50%;
    position: fixed;
    bottom: 5rem;
    right: 5rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &--icon {
      animation: gototop 1.2s linear infinite alternate-reverse;
    }

    @keyframes gototop {
      0% {
        transform: translateY(0.5rem);
      }
      100% {
        transform: translateY(1rem);
      }
    }
  }
`;

export default GoToTop;
