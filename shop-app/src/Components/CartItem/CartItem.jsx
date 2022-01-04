import styled from "styled-components";

const CartItem = () => {
  return (
    <Container>
      <div className="left">
        <div className="img__container">
          <img src="" alt="" />
        </div>
        <div className="desc">
          <div className="title">
            <h5>title</h5>
          </div>
          <div className="fx">
            <button>-</button>
            <span>{1}</span>
            <button>+</button>
            <span>X Rs.137</span>
          </div>
        </div>
      </div>
      <div className="right">
        <span>Rs. {137}</span>
      </div>
    </Container>
  );
};

export default CartItem;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const Container = styled.footer`
  background-color: #fff;
  min-height: 5rem;
  margin-bottom: 0.5rem;
  border: 1px solid #eee;

  display: flex;

  .left {
    flex: 3;

    display: flex;
    gap: 1rem;

    .img__container {
      height: 5rem;
      width: 5rem;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }

  .right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .desc {
    .fx {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      button {
        padding: 0.3rem 0.7rem;
        border: none;
        border-radius: 3px;
        background-color: #de006f;
        color: #fff;
        cursor: pointer;
      }
    }
  }
`;
