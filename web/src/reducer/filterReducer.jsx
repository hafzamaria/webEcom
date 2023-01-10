const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      /////there are 3ways to find max price//
      /////////1stMethod/////////
      let priceArr = action.payload.map((curElem) => curElem.price);
      // console.log(priceArr);
      // console.log(Math.max.apply(null,priceArr));

      /////////2ndMethod ,(best Method)/////////
      // let maxPrice = priceArr.reduce(
      //   (initialVal, curVal) => Math.max(initialVal, curVal),
      //   0
      // );
      // console.log("maxPrice:", maxPrice);

      /////////3rdMethod/////////
      let maxPrice = Math.max(...priceArr);
      console.log("maxPrice:" , maxPrice);

      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters, maxPrice: maxPrice, price: maxPrice },
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    //  method1
    //  case"GET_SORT_VALUE":
    //  let userSortValue = document.getElementById("sort");
    //  let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
    //  console.log(sort_value);
    //  return{
    //   ...state,
    //   sorting_value:sort_value,
    //  };

    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      //  let tempSortProduct =[...action.payload];

      const { filter_products, sorting_value } = state;
      let tempSortProduct = [...filter_products];

      const sortingProducts = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }

        if (sorting_value === "highest") {
          return b.price - a.price;
        }

        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }

        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };
      newSortData = tempSortProduct.sort(sortingProducts);

      return {
        ...state,
        filter_products: newSortData,
      };

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProduct = [...all_products];
      const { text, category, company, color, price } = state.filters;
      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text); //included se word k bich mai b agr wo word h tu search hoga
          // return curElem.name.toLowerCase().startsWith(text);//startsWith se start letter search hot h
        });
      }

      if (category !== "all") {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.category === category;
        });
      }

      if (company !== "all") {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.company.toLowerCase() === company.toLowerCase();
        });
      }

      //  if(color ){
      //   tempFilterProduct = tempFilterProduct.filter((curElem)=>{
      //     return curElem.colors.includes( color);
      //   })
      //  }
      if (color !== "all") {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.colors.includes(color);
        });
      }

      if (price === 0) {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.price == price
        );
      } else {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.price <= price
        );
      }
      return {
        ...state,
        filter_products: tempFilterProduct,
      };

      case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          color: "all",
          maxPrice: 0,
          price: state.filters.maxPrice,
          minPrice:  state.filters.maxPrice,
        },
      };
      

    default:
      return state;
  }
};

export default filterReducer;
