// creat context
// provider
// consumer => useContext Hook
import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/ProductReducer";

const AppContext = createContext();
// const API = 'http://localhost:5000/Products'
const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({type:'SET_LOADING'});
    try {
      const res = await axios.get(url);
      const products = res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (e) {
      dispatch({ type: "API_ERROR" });
    }
    console.log(products);
    console.log(res);
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

// custom hook

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
