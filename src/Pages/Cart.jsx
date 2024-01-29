import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductListItem from "./Components/ProductListItem";
import { modifyItem, removeItem } from "../redux/reducer/cart";
import { useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
function Cart() {
  const list = useSelector((state) => state.cart.list);
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const incrementItem = (item) => {
    dispatch(modifyItem({ ...item, count: item.count + 1 }));
  };
  const decrementItem = (item) => {
    if (item.count === 1) {
      dispatch(removeItem(item));
    } else {
      dispatch(modifyItem({ ...item, count: item.count - 1 }));
    }
  };
  const removeItemFromCart = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <>
      <Navbar/>
    
    <div style={{marginTop: "120px"}}>
      <div className="d-flex justify-content-center mt-1">
        <h4>Your cart items</h4>
      </div>
      {list.length > 0 ? (
        <>
        {list.map((item) => (
          <ProductListItem
            {...item}
            key={item.id}
            incrementItem={() => incrementItem(item)}
            decrementItem={() => decrementItem(item)}
            removeItemFromCart={() => removeItemFromCart(item)}
          />
        ))}
        <button className="buttonStyle " onClick={()=>navigate('/checkout')}>Go to checkout</button>
        </>
      ) : (
        <h3>No item in the cart</h3>
      )}
    </div>
    </>
  );
}

export default Cart;
