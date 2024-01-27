import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductListItem from "./Components/ProductListItem";
import { modifyItem, removeItem } from "../redux/reducer/cart";
function Cart() {
  const list = useSelector((state) => state.cart.list);
  const dispatch = useDispatch();
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
      <div className="d-flex justify-content-center mt-1">
        <h4>Your cart items</h4>
      </div>
      {list.map((item) => (
        <ProductListItem
          {...item}
          key={item.id}
          incrementItem={() => incrementItem(item)}
          decrementItem={() => decrementItem(item)}
          removeItem={() => removeItemFromCart(item)}
        />
      ))}
    </>
  );
}

export default Cart;
