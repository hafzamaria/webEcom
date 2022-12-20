// creat context
// provider
// consumer => useContext Hook
import { createContext, useContext, useEffect } from "react";
import axios from "axios";
const AppContext = createContext();
// const API = 'http://localhost:5000/Products'
const API = "https://api.pujakaitem.com/api/products";

const AppProvider =({children}) =>{

const getProducts=async (url)=>{
const res = await axios.get(url);
const products = res.data;
console.log(products)
console.log(res)
}

    useEffect(()=>{
      getProducts(API);
    },[])

    return<AppContext.Provider value={{myName:'Maria'}}>{children}</AppContext.Provider>
};

// custom hook

const useProductContext =()=>{
    return useContext(AppContext)
}

export {AppProvider ,AppContext ,useProductContext};