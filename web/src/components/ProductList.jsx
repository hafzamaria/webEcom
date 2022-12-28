import React from 'react'
import { useFilterContext } from '../context/filtercontext';
import GridView from './GridView';
const ProductList = () => {
    const {filter_products ,setGridView} = useFilterContext();
  console.log(filter_products);

  if(setGridView){
    return<GridView products={filter_products}/>
  }
//   if(setGridView === false){
//     return<ListView products={filter_products}/>
//   }
  return (
    <div></div>
  )
}

export default ProductList
