import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useProductContext } from "./context/productcontext";
import PageNavigation from "./components/PageNavigation";
import MyImage from "./components/MyImage";
import { Container } from "./Styles/Container";
import FormatPrice from './helpers/FormatPrice'
import {TbReplace, TbTruckDelivery } from 'react-icons/tb'
import {MdSecurity} from 'react-icons/md'
import Star from "./components/Star";
import AddToCart from "./components/AddToCart";
const API = "https://api.pujakaitem.com/api/products";
// const API = 'http://localhost:5000'


const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
console.log(singleProduct);
const { id } = useParams();
// console.log(id)
  const {
    id:maria,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if(isSingleLoading){
    return <div className="page_loading">Loading.......</div>
  }

  return(
    <Wrapper >
    <PageNavigation title={name} />
    <Container className="container">
      <div className="grid grid-two-column">
        {/* product Images  */}
        <div className="product_images product">
          <MyImage className="images" imgs={image} />
        </div>

        {/* product dAta  */}
        <div className="product-data product">
          <h2>{name}</h2>
          <Star stars={stars} reviews={reviews}/>
         
          <p className="product-data-price">
            MRP:
            <del>
              <FormatPrice price={price + 250000} />
            </del>
          </p>
          <p className="product-data-price product-data-real-price">
            Deal of the Day: <FormatPrice price={price} />
          </p>
          <p>{description}</p>
          <div className="product-data-warranty">
            <div className="product-warranty-data">
              <TbTruckDelivery className="warranty-icon" />
              <p>Free Delivery</p>
            </div>

            <div className="product-warranty-data">
              <TbReplace className="warranty-icon" />
              <p>30 Days Replacement</p>
            </div>

            <div className="product-warranty-data">
              <TbTruckDelivery className="warranty-icon" />
              <p>Sumama Delivered </p>
            </div>

            <div className="product-warranty-data">
              <MdSecurity className="warranty-icon" />
              <p>2 Year Warranty </p>
            </div>
          </div>
          
          <div className="product-data-info">
            <p>Available: <span>{stock > 0 ? "In Stock" : "Out of Stock"}</span>
              </p>
              <p>
                ID: <span>{id}</span>
              </p>
              <p>
                Brand: <span>{company}</span>
              </p>
          </div>
         <hr/>
         {stock > 0 && <AddToCart product={singleProduct}/>}
        </div>
      </div>
    </Container>
  </Wrapper>
  ) 
  
};
const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  
    width: 60%;
  }
  .product{
    width:100%;
  }
  .grid{
    gap:2rem;
  } 
  .product_images{
    display:flex;
    align-items: center;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;
      .product-warranty-data {
        text-align: center;
        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }
    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;
      span {
        font-weight: bold;
      }
    }
    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }
  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
    .container{
      width: auto;
    display: flex;
    justify-content: center;
    }
    .grid{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .style{
      padding:0;
    }
    .images{
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    
  }
`;

export default SingleProduct
