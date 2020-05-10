import React from "react";
import { Link } from "@reach/router";
import { Row, Col } from "react-flexbox-grid";

const MainPage = () => {
  return (
    <>
      <Row center="xs">
        <label>Go to product form </label>
        <Link to="product/add"> click aqui</Link>
      </Row>
      <Row center="xs">
        <label>Go to products list</label>
        <Link to="product/list"> click aqui</Link>
      </Row>
    </>
  );
};

export default MainPage;
