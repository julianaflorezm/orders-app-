import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import ProductForm from "./components/product-form";
import ProductList from "./components/product-list";
import MainPage from "./components/orders";

const NotFound = () => <p>Sorry, page not found</p> 
function App() {
  return (
    <Router>
      <ProductForm path="product/add" />
      <ProductList path="product/list"/>
      <MainPage path="/"></MainPage>
      <NotFound default ></NotFound>
    </Router>
  );
}



export default App;
