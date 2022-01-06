import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import isAuth from "../../Utility/isAuth";
import { UserContext } from "../../Contexts/UserContext/UserContext";
import { useHistory } from "react-router";

const ProductsPage = ({ cardData, allProductsData }) => {
  const { id } = useParams();
  const history = useHistory();
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  const [productsOnDisplay, setProductsOnDisplay] = useState(
    allProductsData?.filter(item => item?.category.toString() === id.toString())
  );

  useEffect(() => {
    setProductsOnDisplay(allProductsData?.filter(item => item?.category.toString() === id.toString()));
  }, [id, allProductsData]);

  const handleBuyNow = item => {
    if (isAuth(isLoggedIn)) {
      const localStorageData = JSON.parse(localStorage.getItem("userInfo"));

      if (localStorageData.userCart.length > 0) {
        // check if item already exists in the cart, increase the quantity
        localStorageData.userCart.map((ele, index) => {
          if (ele.id === item.id) {
            localStorageData.userCart.splice(index, 1, { ...ele, qty: ele.qty + 1 });
            // localStorageData.userCart[index]({ ...ele, qty: ele.qty + 1 });
          } else {
            localStorageData.userCart.push({ ...item, qty: 1 });
          }
        });
      } else {
        localStorageData.userCart.push({ ...item, qty: 1 });
      }

      localStorage.setItem("userInfo", JSON.stringify(localStorageData));
    } else {
      history.push("/signin");
    }
  };

  return (
    <Container>
      <LeftPanel>
        {cardData?.map(item => {
          return (
            <Link to={`/products/category/${item?.id}`}>
              <ProductCategory isSelected={item?.id === id ? true : false} key={item?.id}>
                <p>{item?.name}</p>
              </ProductCategory>
            </Link>
          );
        })}
      </LeftPanel>
      <RighPanel>
        {productsOnDisplay?.map(item => (
          <ProductCard>
            <div className="title">
              <h4>{item?.name}</h4>
            </div>
            <div className="img">
              <img src={item?.imageURL} alt="" />
            </div>
            <div className="des">
              <p>{item?.description}</p>
            </div>
            <div className="price">
              <span>MRP Rs. {item?.price}</span>
              <button onClick={() => handleBuyNow(item)}>Buy Now</button>
            </div>
          </ProductCard>
        ))}
      </RighPanel>
    </Container>
  );
};

export default ProductsPage;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const Container = styled.div`
  min-height: 75vh;
  max-width: 80vw;
  padding: 0.5rem 0;
  margin: 0 auto;

  display: flex;
  gap: 1rem;
`;

const LeftPanel = styled.section`
  background-color: #ddd;
  flex: 1;
`;

const RighPanel = styled.section`
  background-color: #fff;
  flex: 4;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
`;

const ProductCategory = styled.section`
  padding: 0.8rem 2rem;
  border-bottom: 1px solid #aaa;
  cursor: pointer;
  font-weight: 300;
  background-color: ${props => (props.isSelected ? "#bbb" : "#ddd")};
`;

const ProductCard = styled.article`
  padding: 0.5rem;
  border-bottom: 2px dotted #ccc;

  .title {
    min-height: 5rem;

    h4 {
      font-size: 1rem;
      padding: 0.5rem;
      font-weight: 700;
    }
  }

  .img {
    height: 15rem;
    width: 100%;
    margin-bottom: 0.5rem;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .des {
    background-color: #eee;
    border-radius: 3px;
    padding: 3px;

    p {
      font-size: 0.8rem;
    }

    margin-bottom: 1rem;
    min-height: 7rem;
  }

  .price {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      width: 40%;
      padding: 0.5rem;
      border: none;
      border-radius: 3px;
      background-color: #de006f;
      color: #fff;
      cursor: pointer;
    }
  }
`;
