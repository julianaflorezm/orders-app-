import React from "react";
import propTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    marginTop: 10,
    color: "#339",
    background: "#eff2ff",
    borderStyle: "outset",
    "&:hover": {
      backgroundColor: "#ffe6e6",
      borderStyle: "solid",
    },
  },
});

const ProductItem = ({ product }) => {
  const classes = useStyles();
  const {
    productId,
    name,
    description,
    basePrice,
    taxRate,
    productStatus,
    inventoryQuantity,
  } = product;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Id {productId}
        </Typography>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography color="textSecondary">Description</Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
        <Typography color="textSecondary">Base price</Typography>
        <Typography variant="body2" component="p">
          {basePrice}
        </Typography>
        <Typography color="textSecondary">Tax rate</Typography>
        <Typography variant="body2" component="p">
          {taxRate}
        </Typography>
        <Typography color="textSecondary">Status</Typography>
        <Typography variant="body2" component="p">
          {productStatus}
        </Typography>
        <Typography color="textSecondary">Inventory quantity</Typography>
        <Typography variant="body2" component="p">
          {inventoryQuantity}
        </Typography>
      </CardContent>
    </Card>
  );
};

ProductItem.propTypes = {
  product: propTypes.shape({
    productId: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    basePrice: propTypes.number.isRequired,
    taxRate: propTypes.number.isRequired,
    productStatus: propTypes.string.isRequired,
    inventoryQuantity: propTypes.number.isRequired,
  }).isRequired,
};

export default ProductItem;
