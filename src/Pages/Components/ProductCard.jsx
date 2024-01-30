import React, { useState } from "react";
import { faHeart as before } from "@fortawesome/free-regular-svg-icons";
// import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as after } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { addItem } from '../redux/reducer/cart';
import { addItemWishList } from "../../redux/reducer/wishlist";
import "../Styles/ProductCard.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [wishIcons, setWishIcons] = useState(before);

  const handleChange = () => {
    setWishIcons((prevIcons) => (prevIcons === before ? after : before));

    if (wishIcons === before) {
      dispatch(addItemWishList(product));
    }
  };

  return (
    <div className="productCard" key={product.id}>
      <div
        className="navigation"
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <div className="imageContainer">
          <img
            src={product.image}
            alt={product.name}
            className="productImage"
          />
        </div>
        <p
          style={{ paddingLeft: "0.5rem", color: "#373737" }}
          className="productName"
        >
          {product.name}
        </p>
        <span style={{ paddingLeft: "0.5rem", fontWeight: "700" }}>
          Rs.{product.price}
        </span>
        <span
          style={{ paddingLeft: "0.5rem", fontWeight: "500", color: "gray" }}
        >
          <strike>Rs.{product.oldprice}</strike>
        </span>
      </div>
      <div className="selectProduct">
        <FontAwesomeIcon
          icon={wishIcons}
          className={`wishIcon ${
            wishIcons === after ? "active-wish-icon" : ""
          }`}
          onClick={handleChange}
        />
      </div>
    </div>
  );
};

export default ProductCard;
