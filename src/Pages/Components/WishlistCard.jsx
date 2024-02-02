import React from "react";
import { Card } from "react-bootstrap";
import '../Styles/Cart.css'

function WishlistCard(values) {
  return (
    <div className="d-flex justify-content-center ">
      <Card
        className="d-flex flex-row align-items-center flex-wrap justify-content-between ProductItemStyle"
        style={{
          borderRadius:'9px'
        }}
      >
        <img
          src={values.image}
          alt="product"
          height={100}
          width={100}
          style={{ marginRight: "3rem", borderRadius: "9px" }}
        />

        <h5 style={{ marginRight: "3rem" }}>{values.title}</h5>

        <span style={{ marginRight: "3rem" }}>Price: {values.price}/-</span>
       
       
        
        <button
          style={{ marginRight: "3rem" }}
          className="btn btn-danger"
          onClick={values.removeItemFromWish}
        >
          Remove
        </button>
      </Card>
    </div>
  );
}

export default WishlistCard;
