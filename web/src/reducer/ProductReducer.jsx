const ProductReducer = (state, action) => {
  // if(action.type === "SET_LOADING"){
  //     return {
  //         ...state,
  //         isLoading: true,
  //     }
  // }

  // if(action.type === "MY_API_ERROR"){
  //     return {
  //         ...state,
  //         isLoading:false,
  //         isError:true,
  //     }
  // }

  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

      case "SET_API_DATA":
        const featureDATA = action.payload.filter((curElem)=>{
         return curElem.featured === true;
        });

        return {
        ...state,
        isLoading:false,
        products:action.payload,
        featureProducts:featureDATA,
        };
     
      case "MY_API_ERROR":
        return {
                    ...state,
                    isLoading:false,
                    isError:true,
                }

      

    default:
      return state;
  }

  
};

export default ProductReducer;
