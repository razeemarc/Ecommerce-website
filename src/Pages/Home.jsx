import React from "react";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";

function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
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
    </>
  );
}

export default Home;
