import styled from "styled-components";
import Navbar from "./Components/Navbar/Navbar";
import { GlobalStyle } from "./GlobalStyle";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import SigninPage from "./Pages/SigninPage/SigninPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/products" exact>
          <ProductsPage />
        </Route>
        <Route path="/signin" exact>
          <SigninPage />
        </Route>
        <Route path="/register" exact>
          <RegisterPage />
        </Route>
        <Route path="*">{/* <RegisterPage /> */}</Route>
      </Switch>
    </AppContainer>
  );
}

export default App;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const AppContainer = styled.div``;
