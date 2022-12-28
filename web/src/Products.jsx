import React from 'react'
import FilterSection from './components/FilterSection';
import Sort from './components/Sort';
import ProductList from './components/ProductList';
import styled from "styled-components";
import { useFilterContext } from './context/filtercontext';

const Products = () => {
  const {filter_products} = useFilterContext();
  console.log(filter_products);
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
.container{
  max-width:60vw;
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
  }
`;


export default Products
