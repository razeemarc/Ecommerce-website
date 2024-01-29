import React, { useState } from "react";
import "./Styles/Shop.css";
import { Card } from "react-bootstrap";
import ProductCategory from "./Components/ProductList";
import { useNavigate } from "react-router-dom";

function Shop() {
  const catstyle = {
    cursor: "pointer",
    paddingLeft: "15px",
  };

  const Navigate =useNavigate();

  //filter Products based on Category
  const [data, setData] = useState(ProductCategory);
 
  const filterResult = (catItem) => {
    const result = ProductCategory.filter((curData) => {
      return curData.category.includes(catItem);
    });
    setData(result);
  };
  //function definition for Dropdown menu
  const defaultChange = () => {
    setData(ProductCategory);
  };
  const sortByPriceHighToLow = () => {
    const result = [...data].sort((a, b) => b.price - a.price);
    setData(result);
  };
  const sortByPriceLowToHigh = () => {
    const result = [...data].sort((a, b) => a.price - b.price);
    setData(result);
  };

  return (
    <div>
      <div className="container">
        <div style={{ width: "175px" }}>
          {/*Category Section */}
          <div className="categorySection-container">
            <div>
              <span className="category-title">Categories</span>
              <div style={{ paddingTop: "10px", paddingLeft: "15px" }}>
                <label>
                  
                  <input
                    style={catstyle}
                    type="checkbox"
                    onChange={defaultChange}
                  />
                  All Categories
                </label>
                <br />
                <label>
                  
                  <input style={catstyle} type="checkbox" /> Turmeric
                </label>
              </div>
            </div>
            {/*Category Tag Section*/}
            <div className="category-tag">
              <span className="category-title">Tag</span>
              <br />
              <span onClick={() => filterResult("Turmeric")} style={catstyle}>
                
                Turmeric
              </span>
              <br />

              <span onClick={() => filterResult("Dried")} style={catstyle}>
                
                Dried
              </span>
              <br />
              <span onClick={() => filterResult("Dried")} style={catstyle}>
                
                Nizamabad
              </span>
            </div>
          </div>
        </div>
        {/*Dropdown Menu Section*/}
        <div>
          <div style={{ marginBottom: "20px" }}>
            <select
              className="dropdown"
              onChange={(e) => {
                if (e.target.value === "option1") {
                  sortByPriceHighToLow();
                } else if (e.target.value === "option2") {
                  sortByPriceLowToHigh();
                } else {
                  defaultChange();
                }
              }}
            >
              <option value="">Default</option>
              <option value="option1">Price - High to Low</option>
              <option value="option2">Price - Low to High</option>
            </select>
          </div>
          {/*Product Section*/}
          <div className="shop-container" >
            {data.map((values) => (
              <div key={values.id}>
                <Card
                  style={{
                    width: "18rem",
                    border: "none",
                    borderRadius: "10px",
                  }}
                >
                  <Card.Img variant="top" src={values.image} style={{cursor:'pointer'}} onClick={()=>Navigate(`/product/${values.id}`)}/>
                  <Card.Body>
                    <Card.Title>{values.title}</Card.Title>
                    <p>Price: {values.price}/-</p>

                    <button varient="primary" className="buttonStyle" >
                      Add to Cart
                    </button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;