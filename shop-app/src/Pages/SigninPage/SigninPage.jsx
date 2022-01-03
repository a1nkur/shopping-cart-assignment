import styled from "styled-components";

const SigninPage = () => {
  return (
    <Container>
      <div className="inner__container"></div>
    </Container>
  );
};

export default SigninPage;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const Container = styled.div`
  min-height: 70vh;
  max-width: 80vw;
  padding: 2rem 0;
  margin: 0 auto;

  border: 1px solid red;

  .inner__container {
    max-width: 60vw;
    margin: 0 auto;
    border: 1px solid red;
    min-height: 30rem;
  }
`;
