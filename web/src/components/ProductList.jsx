import React from 'react'
import { useFilterContext } from '../context/filtercontext';
import GridView from './GridView';
const ProductList = () => {
    const {filter_products ,grid_view} = useFilterContext();
  console.log(filter_products);

  if(grid_view === true) {
    return<GridView products={filter_products}/>
  }
  // if(grid_view === false){
  //   return<ListView products={filter_products}/>
  // }
  return (
    <div></div>
  )
}

export default ProductList
