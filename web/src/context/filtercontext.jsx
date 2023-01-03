import { useEffect } from "react";
import { useContext ,  createContext ,useReducer} from "react";
import { useProductContext } from "./productcontext";
import reducer from "../reducer/filterReducer"


const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  // grid_view:false,
  grid_view:true,
  sorting_value:"lowest",


};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  console.log(products)

  const [state, dispatch] = useReducer(reducer, initialState);

//  to set grid view
const setGridView = ()=>{
return dispatch ({type:"SET_GRID_VIEW"});
};

// to set ListView
const setListView = ()=>{
  return dispatch ({type:"SET_LIST_VIEW"});
  };

  // sorting function
  const sorting = ( )=>{
  dispatch({type:"GET_SORT_VALUE"});
  }


  // to sort the products
  useEffect(()=>{
  //  console.log("hiii")
  dispatch({type:"SORTING_PRODUCTS" , payload:products});
  },[state.sorting_value]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state ,setGridView,setListView,sorting}}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};