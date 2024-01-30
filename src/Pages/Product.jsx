import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductList from "./Components/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/reducer/cart";
import Navbar from "./Components/Navbar";
import "./Styles/Product.css";

function Product() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);
  const values = ProductList.find(
    (element) => element.id === parseInt(params.id)
  );

  const addToCart = () => {
    setAlert(true);
    setTimeout(() => setAlert(false), 3000);
    dispatch(addItem(values));
  };
  //Add to Cart button Change
  const list = useSelector((state) => state.cart.list);
  const element = list.find((item) => item.id === values.id);

  return (
    <>
      <Navbar /><section>

      <div style={{ marginTop: "120px" }}>
        {alert && (
          <span className="alert alert-success">Item added to Cart</span>
        )}
        
          
          <div className="product-container">
            <div className="productImage-section">
              <img src={values.image} alt="product" />
            </div>

            <div classname="product-details">
              <h3>{values.title}</h3>
              <h4 className="price-heading" >Price: {values.price}/-</h4>
              <span>{values.description}</span><br/>
              <hr/>
              <div className="product-buttons">
              <button
                className="buttonStyle"
                onClick={() => navigate(`/checkout/${values.id}`)}
              >
                Buy Now
              </button>

              {element?.count > 0 ? (
                <button
                  className="goToCart-button"
                  onClick={() => navigate("/cart")}
                  style={{ marginLeft: "30px" }}
                >
                  Go to Cart
                </button>
              ) : (
                <button
                  className="buttonStyle"
                  onClick={addToCart}
                  style={{ marginLeft: "30px" }}
                >
                  Add to Cart
                </button>
                
              )}
              </div>
            </div>
          </div>
       
      </div>
      </section>
    </>
  );
}

export default Product;
