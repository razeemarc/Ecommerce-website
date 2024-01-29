import React from "react";
import Slider from "./Components/Slider";
import Navbar from "./Components/Navbar";
function Home() {
  return (
    <>
       
      <Navbar/>
      <div style={{ marginTop: "120px" }}>
        <div>
          <Slider />
        </div>
        <div>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "30px",
            }}
          >
            Products
          </span>
        </div>
      </div>
    </>
  );
}

export default Home;
