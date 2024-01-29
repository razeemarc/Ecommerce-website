import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductListItem from "./Components/ProductListItem";
import { modifyItem } from "../redux/reducer/cart";
import { useNavigate, useParams } from "react-router-dom";
import ProductList from "./Components/ProductList";
import Navbar from "./Components/Navbar";
function Checkout() {
  const params = useParams();
  const list = useSelector((state) => state.cart.list);

  const [state, setState] = useState(
    params.id
      ? [{
          ...ProductList.find(
            (element) => element.id === parseInt(params.id)
          ),
          count: 1,
        }]
      :list
  );
  
  const navigate = useNavigate();
  const incrementItem = (item) => {
    const index = state.findIndex(
      (product) => product.id === item.id
  );
    setState((state)=>[
      ...state.slice(0,index),
      { ...item,count: item.count+1},
      ...state.slice(index+1),
    ])
  };
  const decrementItem = (item) => {
    if (item.count === 1) {
      removeItemFromCart(item);
    } else {
      const index = state.findIndex(
        (product) => product.id === item.id
    );
      (modifyItem({ ...item, count: item.count - 1 }));
      setState((state)=>[
        ...state.slice(0,index),
        { ...item,count: item.count-1},
        ...state.slice(index+1),
      ])
    }
  };
  const removeItemFromCart = (item) => {
    const index = state.findIndex(
      (product) => product.id === item.id
  );
    setState((state)=>[
      ...state.slice(0,index),
     
      ...state.slice(index+1),
    ])  };
  return (
    <>
    <Navbar/>
    <div style={{marginTop: "120px"}}>
      <div className="d-flex justify-content-center mt-1">
        <h4>Checkout</h4>
      </div>
      {state.length > 0 ? (
        <>
          {state.map((item) => (
            <ProductListItem
              {...item}
              key={item.id}
              incrementItem={() => incrementItem(item)}
              decrementItem={() => decrementItem(item)}
              removeItemFromCart={() => removeItemFromCart(item)}
            />
          ))}
          <button
            className="buttonStyle "
            onClick={() => navigate("/success")}
          >
           place Order
          </button>
        </>
      ) : (
        <h3>No item in the Checkout</h3>
      )}
    </div>
    </>
  );
}

export default Checkout;
