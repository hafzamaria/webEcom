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
  filters:{
    text:"",
  }


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

  // sorting function method1
  // const sorting = ( )=>{
  // dispatch({type:"GET_SORT_VALUE"});
  // }

  // sorting function method2
  const sorting = (event )=>{
    let userValue = event.target.value;
  dispatch({type:"GET_SORT_VALUE" , payload: userValue});
  };

  // update the filter values
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };

  // to sort the products
  useEffect(()=>{
  //  console.log("hiii")
  dispatch({type:"SORTING_PRODUCTS"});
  },[state.sorting_value]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state ,setGridView,setListView,sorting,updateFilterValue}}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};