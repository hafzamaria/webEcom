import React, { useState } from 'react'
import { Button } from '../Styles/Button'
import styled from 'styled-components';
import {BsFillGridFill ,BsList } from "react-icons/bs";
import {useFilterContext} from "../context/filtercontext";

const Sort = () => {
  const {grid_view ,setGridView,setListView,filter_products} = useFilterContext();
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
      <div className="products-data"><p>{`${filter_products.length} Products Available`}</p></div>
      {/* 3rdColumn */}
      <div className="sort-selection">
        dropDown
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
`;
export default Sort
