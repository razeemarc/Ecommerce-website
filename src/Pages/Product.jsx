import React from "react";
import { useParams } from "react-router-dom";
import ProductList from "./Components/ProductList";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/reducer/cart";

function Product() {
  const params = useParams();
  const dispatch = useDispatch();
  const values = ProductList.find(
    (element) => element.id === parseInt(params.id)
  );

  const addToCart = () => {
    dispatch(addItem(values));
  };

  return (
    <div>
      <div className="product-container">
        <div >
          <Card
            style={{
              width: "18rem",
              border: "none",
              borderRadius: "10px",
            }}
          >
            <Card.Img variant="top" src={values.image} />
            <Card.Body>
              <Card.Title>{values.title}</Card.Title>
              <p>Price: {values.price}/-</p>

              <button className="buttonStyle">Buy Now</button>

              <button
                className="buttonStyle"
                onClick={addToCart}
                style={{ marginLeft: "30px" }}
              >
                Add to Cart
              </button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Product;
