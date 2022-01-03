import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductsPage = ({ cardData, allProductsData }) => {
  const { id } = useParams();

  const [productsOnDisplay, setProductsOnDisplay] = useState(allProductsData?.filter(item => item?.category === id));

  useEffect(() => {
    // const filteredData = allProductsData?.filter(item => item?.category === id);
    setProductsOnDisplay(allProductsData?.filter(item => item?.category === id));
  }, [id, allProductsData]);

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
      <RighPanel></RighPanel>
    </Container>
  );
};

export default ProductsPage;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const Container = styled.div`
  min-height: 70vh;
  max-width: 80vw;
  padding: 0.5rem 0;
  margin: 0 auto;

  display: flex;
`;

const LeftPanel = styled.section`
  background-color: #ddd;
  flex: 1;
`;

const RighPanel = styled.section`
  background-color: #fff;
  flex: 4;
`;

const ProductCategory = styled.section`
  padding: 0.8rem 2rem;
  border-bottom: 1px solid #aaa;
  cursor: pointer;
  font-weight: 300;
  background-color: ${props => (props.isSelected ? "#bbb" : "#ddd")};
`;
