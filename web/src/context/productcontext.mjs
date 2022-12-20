// creat context
// provider
// consumer => useContext Hook
import { createContext } from "react";
const AppContext = createContext();


const AppProvider =({children}) =>{
    return<AppContext.Provider>{children}</AppContext.Provider>
};


export {AppProvider};