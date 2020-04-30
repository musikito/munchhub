import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
import CartPage from "./views/CartPage/CartPage";
// Create Cat
import CreateCategory from "./views/CategoryComponent/CreateCategory";
import DetailProductPage from "./views/DetailProductPage/DetailProductPage";
import Footer from "./views/Footer/Footer";
import HistoryPage from "./views/HistoryPage/HistoryPage";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import NavBar from "./views/NavBar/NavBar";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import UploadProductPage from "./views/UploadProductPage/UploadProductPage";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div style={{ paddingTop: "75px", minHeight: "calc(100vh - 80px)" }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route
            exact
            path="/product/upload"
            component={Auth(UploadProductPage, true)}
          />
          <Route
            exact
            path="/product/:productId"
            component={Auth(DetailProductPage, null)}
          />
          <Route exact path="/user/cart" component={Auth(CartPage, true)} />
          <Route exact path="/history" component={Auth(HistoryPage, true)} />
          <Route
            exact
            path="/createcat"
            component={Auth(CreateCategory, true)}
          />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
