import styled from "styled-components";
import { useFilterContext } from "../context/filtercontext";
import FormatPrice from "../helpers/FormatPrice";
import { FaCheck } from "react-icons/fa";
import {Button} from "../Styles/Button"

const FilterSection = () => {
  ///its search box

  const {
    filters: { text, category, color, maxPrice, price, minPrice },
    updateFilterValue,
    all_products,
    clearFilters,
  } = useFilterContext();

  //to get the unique data of each fields
  const getUniqueData = (data, property) => {
    let newValue = data.map((curElem) => {
      return curElem[property];
    });
    //////////////////////////Method01//////////////
    //   if(property === 'colors'){
    //     return (newValue = ["all", ...new Set([].concat(...newValue))]);
    //   }else{
    //     return (newValue = ["all", ...new Set(newValue)]);
    //   }
    // //  console.log(newValue);
    // }

    /////method 02 for array depth

    if (property === "colors") {
      newValue = newValue.flat();
    }
    return (newValue = ["all", ...new Set(newValue)]);

    //  console.log(newValue);
  };

  //  we need unique data
  const categoryOnlyData = getUniqueData(all_products, "category");
  const companyOnlyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");
  console.log(colorsData);

  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search"
            value={text}
            onChange={updateFilterValue}
          />
        </form>
      </div>
      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categoryOnlyData.map((curElem, index) => {
            return (
              // <button
              // key={index}
              // type="button"
              // name="category"
              // value={curElem}
              // onClick={updateFilterValue}>
              //   {curElem}
              // </button>
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                className={curElem === category ? "active" : ""}
                onClick={updateFilterValue}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </div>

      <div className="filter-company">
        <h3>Company</h3>

        <form action="#">
          <select
            name="company"
            id="company"
            className="filter-company--select"
            onClick={updateFilterValue}
          >
            {companyOnlyData.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name="company">
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
      </div>
      <div className="filter-colors colors">
        <h3>Colors</h3>
        <div className="filter-color-style">
          {colorsData.map((curColor, index) => {
            if (curColor === "all") {
              return (
                <button
                  key={index}
                  type="button"
                  className="color-all--style"
                  value={curColor}
                  name="color"
                  onClick={updateFilterValue}
                >
                  All
                </button>
              );
            }
            return (
              <button
                key={index}
                type="button"
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                style={{ backgroundColor: curColor }}
                value={curColor}
                name="color"
                onClick={updateFilterValue}
              >
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="filter_price">
        <h3>Price</h3>
        <p className="price">{<FormatPrice price={price} />}</p>
        <input type="range" value={price} name="price" min={minPrice} max={maxPrice} onChange={updateFilterValue}/>
      </div>
      <div className="filter-clear">
        <Button className="btn" onClick={clearFilters}>Clear Filters</Button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h3 {
    padding: 2rem 0;
    font-size: bold;
  }
  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }
  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }
      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }
  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }
  .filter-color-style {
    display: flex;
  }
  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
  .price{
    font-size: 1.5rem;
    margin-top: -1rem;
  }
 
`;

export default FilterSection;
