import React, { useState } from "react";
import "./Styles/Shop.css";
import { Card } from "react-bootstrap";
import ProductList from "./Components/ProductList";
import { useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar";



function Shop() {
  const catstyle = {
    cursor: "pointer",
    paddingLeft: "15px",
  };

  const navigate =useNavigate();

  //filter Products based on Category
  const [data, setData] = useState(ProductList);
 
  const filterResult = (catItem) => {
    const result = ProductList.filter((curData) => {
      return curData.category.includes(catItem);
    });
    setData(result);
  };
  const filterTagResult = (catItem) => {
    const result = ProductList.filter((curData) => {
      return curData.brand.includes(catItem);
    });
    setData(result);
  };
  //function definition for Dropdown menu
  const defaultChange = () => {
    setData(ProductList);
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
    
    <Navbar/>
      <div className="container" style={{marginTop: "120px"}}>
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
                  
                  <input style={catstyle} onChange={()=>filterResult("ios")}  type="checkbox" /> ios
                </label>
              
              <br />
                <label>
                  
                  <input style={catstyle} onChange={()=>filterResult("Android")}  type="checkbox" /> Android
                </label>
              </div>
            </div>
            {/*Category Tag Section*/}
            <div className="category-tag">
              <span className="category-title">Tag</span>
              <br />
              <span onClick={() => filterTagResult("Xiaomi")} style={catstyle}>
                
                Xiaomi
              </span>
              <br />

              <span onClick={() => filterTagResult("Oneplus")} style={catstyle}>
                
                Oneplus
              </span>
              <br />
              <span onClick={() => filterTagResult("Apple")} style={catstyle}>
                
                Apple
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
                    width: "14rem",
                    border: "none",
                    borderRadius: "10px",
                  }}
                >
                  <Card.Img variant="top"  src={values.image} height='180px'  style={{cursor:'pointer'}} onClick={()=>navigate(`/product/${values.id}`)}/>
                  <Card.Body>
                    <Card.Title>{values.title}</Card.Title>
                    <p>Price: {values.price}/-</p>

                
                
             
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
