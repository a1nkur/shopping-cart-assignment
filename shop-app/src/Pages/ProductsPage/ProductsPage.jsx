import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import isAuth from "../../Utility/isAuth";
import { UserContext } from "../../Contexts/UserContext/UserContext";
import { CartContext } from "../../Contexts/CartContext/CartContext";
import ShopContext from "../../Contexts/CartContext/ShopContext";
import { useHistory } from "react-router";

const ProductsPage = ({ cardData, allProductsData }) => {
  const { id } = useParams();
  const history = useHistory();
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  // const { cart, setCart } = useContext(CartContext);

  const [productsOnDisplay, setProductsOnDisplay] = useState(
    allProductsData?.filter(item => item?.category.toString() === id.toString())
  );

  useEffect(() => {
    setProductsOnDisplay(allProductsData?.filter(item => item?.category.toString() === id.toString()));
  }, [id, allProductsData]);

  // const handleBuyNow = item => {
  //   const localStorageData = JSON.parse(localStorage.getItem("userInfo"));
  //   let newlocs = [...localStorageData.UserCart];

  //   if (isAuth(isLoggedIn)) {

  //     if (localStorageData.userCart.length > 0) {
  //       // check if item already exists in the cart, increase the quantity
  //       newlocs = localStorageData.userCart.map((ele, index) => {
  //         // [{bread}, {}, {}, {}]
  //         if (ele.id !== item.id) {
  //           return { ...item, qty: 1 };
  //         } else {
  //           return { ...ele, qty: ele.qty + 1 };
  //         }
  //       });

  //       localStorage.setItem("userInfo", JSON.stringify({ ...localStorageData, userCart: newlocs }));
  //     } else {
  //       localStorageData.userCart.push({ ...item, qty: 1 });
  //       localStorage.setItem("userInfo", JSON.stringify({ ...localStorageData }));
  //     }
  //   } else {
  //     history.push("/signin");
  //   }
  // };

  // const handleBuyNow = item => {
  //   // Check if authenticated
  //   if (isAuth(isLoggedIn)) {
  //     if (cart.length > 0) {
  //       cart.map(ele => {
  //         if (ele.id != item.id) {
  //           setCart([...cart, { ...item, qty: 1 }]);
  //         } else {
  //           setCart([...cart, { ...item, qty: 1 }]);
  //         }
  //       });
  //     } else {
  //       setCart(prevState => prevState.push({ ...item, qty: 1 }));
  //       localStorage.setItem(
  //         "userInfo",
  //         JSON.stringify({ ...JSON.parse(localStorage.getItem("userInfo")), userCart: cart })
  //       );
  //     }
  //   } else {
  //     history.push("/signin");
  //   }
  // };

  // const handleBuyNow = item => {
  //   let temp = cart;

  //   if (isAuth(isLoggedIn)) {
  //     if (temp.length > 0) {
  //       let count = 0;
  //       const newArr = temp.map(ele => {
  //         if (ele.id === item.id) {
  //           return { ...ele, qty: ele.qty + 1 };
  //         } else {
  //           count++;
  //           return ele;
  //         }
  //       });

  //       if (count === temp.length) {
  //         console.log("i ran");
  //         temp.push({ ...item, qty: 1 });
  //         console.log(temp);
  //         setCart(temp);
  //       } else {
  //         setCart(newArr);
  //       }

  //       count = 0;
  //     } else {
  //       setCart([{ ...item, qty: 1 }]);
  //     }
  //   } else {
  //     history.push("/signin");
  //   }
  // };

  // useEffect(() => {
  //   const lsData = JSON.parse(localStorage.getItem("userInfo"));

  //   localStorage.setItem("userInfo", JSON.stringify({ ...lsData, userCart: cart }));
  // }, [cart]);

  const handleBuyNow = () => {};

  return (
    <ShopContext.Consumer>
      {context => (
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
                  <button onClick={context.addProductToCart.bind(this, item)}>Buy Now</button>
                </div>
              </ProductCard>
            ))}
          </RighPanel>
        </Container>
      )}
    </ShopContext.Consumer>
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
