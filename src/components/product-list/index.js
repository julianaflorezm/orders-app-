import React, { useEffect, useState, useReducer } from "react";
import getProducts from "./data";
import ProductItem from "./item";
import { Row, Col } from "react-flexbox-grid";
import { Link } from "@reach/router";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch(() => setError(error))
      .finally(() => setLoading(false));
  }, [setProducts]);

  return {
    loading,
    products,
    error,
  };
};

const ProductList = () => {
  const { products, loading, error } = useProducts();
  const ProductItems = products.map((product) => {
    return (
      <Col
        xs={6}
        md={3}
        lg={2}
        key={product.productId}
        style={{ marginTop: 10 }}
      >
        <ProductItem product={product} />
      </Col>
    );
  });

  if (loading) {
    return (
      <Row center="xs">
        <p>Loading...</p>
      </Row>
    );
  } else if (error) {
    return (
      <Row center="xs">
        <h2>Sorry, there was an error :(</h2>
      </Row>
    );
  }
  return (
    <Row>
      {ProductItems}
      <Link to="/">Back</Link>
    </Row>
  );
};

export default ProductList;
