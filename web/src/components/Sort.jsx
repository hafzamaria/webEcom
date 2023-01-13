import React, { useState } from 'react'
import { Button } from '../Styles/Button'
import styled from 'styled-components';
import {BsFillGridFill ,BsList } from "react-icons/bs";
import {useFilterContext} from "../context/filtercontext";

const Sort = () => {
  const {grid_view ,setGridView,setListView,filter_products,sorting} = useFilterContext();
  return(
    <Wrapper className='sort-section'>
      {/* 1stColumn */}
      <div className="sorting-list--grid">
    <button onClick={setGridView} className={grid_view ? "active sort-btn" : "sort-btn"}>
      <BsFillGridFill className="icon"/>
    </button>
    <button onClick={setListView} className={!grid_view ? "active sort-btn" : " sort-btn"}>
      <BsList className="icon"/>
    </button>
      </div>
      {/* 2ndColumn */}
      <div className="products-data"><p className='data'>{`${filter_products.length} Products Available`}</p></div>
      {/* 3rdColumn */}
      <div className="sort-selection">
    <form action="#">
      <label htmlFor='sort'></label>
      <select name='sort' id='sort' className='sort-selection--style' onClick={sorting}> 
        <option value="lowest">Price(lowest)</option>
       <option value="#" disabled></option>
        <option value="highest">Price(highest)</option>
        <option value="#" disabled></option>
        <option value="a-z">Price(a-z)</option>
        <option value="#" disabled></option>
        <option value="z-a" >Price(z-a)</option>
        
      </select>
    </form>
      </div>

    </Wrapper>
  )
  
  // const [grid_view , setGrid_view] = useState(false)
  // return (
  //   <div>
  //     Sort
  //     <Button onClick={()=>setGrid_view(grid_view)}></Button>
  //   </div>
  // )
};
const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  .sorting-list--grid {
    display: flex;
    gap: 2rem;
    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }
  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;
    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
  .products-data{
    font-size: 1.5rem;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .sort-section{
      gap: 2rem;
    }
    .sorting-list--grid{
      height:3rem;
      gap: 1rem;
      margin-right:1rem;
    }
    .data{
      font-size: 1rem;
    text-align: center;
    margin-top: 0rem;
    }
  }
`;
export default Sort
