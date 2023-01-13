import React from 'react'
import FilterSection from './components/FilterSection';
import Sort from './components/Sort';
import ProductList from './components/ProductList';
import styled from "styled-components";


const Products = () => {
  
  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <div className='filter-section'>
          <FilterSection/>
        </div>
         <section className='product-view--sort'>
          <div className="sort-filter">
            <Sort/>
          </div>
          <div className="main-product">
            
            <ProductList/>
          </div>
         </section>
      </div>

    </Wrapper>
  )
};
const Wrapper = styled.section`
.grid{
 width:auto;
  
}
.container {
  width:auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  
    align-items: flex-start;
}
.main-product{
  width:auto;
}
a{
  width: 250px;
}
.filter-section{
  width:20%;
}
.product-view--sort{
  width:80%;
}
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
   
    .filter-section{
        width:100%
      }
      .product-view--sort{
        width:100%;
      }
      .product-view--sort{
        width:auto;
      }
      
  }
`;


export default Products
