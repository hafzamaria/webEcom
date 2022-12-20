// creat context
// provider
// consumer => useContext Hook
import { createContext, useContext } from "react";
const AppContext = createContext();


const AppProvider =({children}) =>{
    return<AppContext.Provider value={{myName:'Maria'}}>{children}</AppContext.Provider>
};

// custom hook

const useProductContext =()=>{
    return useContext(AppContext)
}

export {AppProvider ,AppContext ,useProductContext};