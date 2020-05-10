import React from "react";
import { useFormik } from "formik";
import validations from "./validations";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import { Row } from "react-flexbox-grid";
import { Link } from "@reach/router";

const ProductForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      basePrice: 0,
      taxRate: 0,
      productStatus: "",
      inventoryQuantity: 0,
    },
    validate: validations,
    onSubmit: (values) => {
      console.log(JSON.stringify({ values }, null, 2));
    },
  });
  const select = (e) => {
    formik.setValues("productStatus", e.target.value);
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <Row center="xs">
        <TextField
          variant="filled"
          size="small"
          name="name"
          type="text"
          value={formik.values.name}
          label="Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.name && formik.touched.name ? (
          <Alert severity="warning" center="xs">
            {formik.errors.name}
          </Alert>
        ) : null}
      </Row>

      <Row center="xs">
        <TextField
          variant="filled"
          size="small"
          name="description"
          type="text"
          label="Description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.description && formik.touched.description ? (
          <Alert severity="warning" center="xs">
            {formik.errors.description}
          </Alert>
        ) : null}
      </Row>

      <Row center="xs">
        <TextField
          variant="filled"
          size="small"
          name="basePrice"
          type="number"
          label="Base price"
          value={formik.values.basePrice}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.basePrice && formik.touched.basePrice ? (
          <Alert severity="warning" center="xs">
            {formik.errors.basePrice}
          </Alert>
        ) : null}
      </Row>

      <Row center="xs">
        <TextField
          variant="filled"
          color="primary"
          size="small"
          name="taxRate"
          type="number"
          step="any"
          label="Tax rate"
          value={formik.values.taxRate}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.taxRate && formik.touched.taxRate ? (
          <Alert severity="warning" center="xs">
            {formik.errors.taxRate}
          </Alert>
        ) : null}
      </Row>

      <Row center="xs">
        <TextField
          variant="filled"
          size="small"
          name="productStatus"
          type="text"
          label="Product status"
          value={formik.values.productStatus}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.productStatus && formik.touched.productStatus ? (
          <Alert severity="warning" center="xs">
            {formik.errors.productStatus}
          </Alert>
        ) : null}
      </Row>

      <Row center="xs">
        <TextField
          variant="filled"
          size="small"
          name="inventoryQuantity"
          type="number"
          label="Inventory quantity"
          value={formik.values.inventoryQuantity}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.inventoryQuantity && formik.touched.inventoryQuantity ? (
          <Alert severity="warning" center="xs">
            {formik.errors.inventoryQuantity}
          </Alert>
        ) : null}
      </Row>

      <Row center="xs">
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
        <Link to="/">
          <Button variant="contained" color="primary" type="button">
            Back
          </Button>
        </Link>
      </Row>
    </form>
  );
};

export default ProductForm;
