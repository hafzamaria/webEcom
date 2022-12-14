import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from './Styles/Button';

const Error = () => {
  return (
   <Wrapper>
    <img className='img' src="../image/error.jpg" alt="" />
    <NavLink to='/'>
    <Button className='btn'>Go Back</Button>
    </NavLink>
   </Wrapper>
   
  )
}
const Wrapper = styled.section`
padding: 10px;
display: flex;
  flex-direction: column;
  align-items: center;
   
  .img{
    width: 80%;
    height: 80%;
  }

  .btn{
    margin-top: 3rem;
    font-size:2.8rem;
    
  }
`;
export default Error
