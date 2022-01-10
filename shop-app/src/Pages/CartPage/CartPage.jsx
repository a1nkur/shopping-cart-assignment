import styled from "styled-components";
import CartItem from "../../Components/CartItem/CartItem";
import ShopContext from "../../Contexts/CartContext/ShopContext";

const CartPage = () => {
  return (
    <ShopContext.Consumer>
      {context => (
        <Container>
          <div className="title">
            <h3> My Cart ({context.cart.length} item)</h3>
          </div>
          <CartItems>
            {context.cart.map((ele, index) => (
              <CartItem ele={ele} index={index} />
            ))}
          </CartItems>
        </Container>
      )}
    </ShopContext.Consumer>
  );
};

export default CartPage;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const Container = styled.div`
  min-height: 75vh;
  max-width: 80vw;
  padding: 0.5rem 0;
  margin: 0 auto;

  background-color: #eee;

  .title {
    margin: 1rem 0;
    h3 {
      padding: 0.8rem 0.5rem;
      background-color: #fff;
    }
  }
`;

const CartItems = styled.section`
  background-color: #eee;
  min-height: 5rem;
`;
