// import { createContext, useContext } from "react";
import React, { useContext, useEffect, useReducer } from "react";
import { reducer } from "./Reducer";

//context to heroSection
// create a context(wareHouse)
// Provider
// consumer /useContext (hook)
const AppContext = React.createContext();

// const API ='https://';

const initialState = {
  name: "",
  image: "",
  // services:[],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Maria Store",
        image: "./image/shop.jpg",
      },
    });
  };
  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Maria Ecommerce",
        image: "./image/shopping.jpg",
      },
    });
  };

  ////////////services
  const updateServicesPage = () => {
    return dispatch({
      type: "SERVICES_UPDATE",
      payload: {
        name: "Maria Momina",
        image: "",
      },
    });
  };
  //////to get the api data
  //    const getServices = async (url) => {
  //      try{
  //         const res =await fetch(url);
  //         const data =await res.json();
  //          dispatch({type:'GET_SERVICES' ,payload:data});
  //      }catch(error){
  //         console.log(error)}
  //    }

  //////////to call the api
  //    useEffect(()=>{
  //     getServices(API);
  //    },[]);

  return (
    <AppContext.Provider
      value={{ ...state, updateHomePage, updateAboutPage, updateServicesPage }}
    >
      {children}
    </AppContext.Provider> ///value is firstName
  );
};
///global custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
