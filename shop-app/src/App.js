import styled from "styled-components";
import Navbar from "./Components/Navbar/Navbar";
import { GlobalStyle } from "./GlobalStyle";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import SigninPage from "./Pages/SigninPage/SigninPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import Footer from "./Components/Footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import CartPage from "./Pages/CartPage/CartPage";

function App() {
  const [cardData, setCardData] = useState(null);
  const [allProductsData, setAllProductsData] = useState(null);

  useEffect(() => {
    axios.get(`/server/categories/index.get.json`).then(data => {
      setCardData(data.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`/server/products/index.get.json`).then(data => {
      setAllProductsData(data.data);
    });
  }, []);

  return (
    <AppContainer>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <HomePage cardData={cardData} />
        </Route>
        <Route path="/products/category/:id" exact>
          <ProductsPage cardData={cardData} allProductsData={allProductsData} />
        </Route>
        <Route path="/signin" exact>
          <SigninPage />
        </Route>
        <Route path="/register" exact>
          <RegisterPage />
        </Route>
        <Route path="/cart" exact>
          <CartPage />
        </Route>
        <Route path="*">{/* <RegisterPage /> */}</Route>
      </Switch>
      <Footer />
    </AppContainer>
  );
}

export default App;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const AppContainer = styled.div``;
