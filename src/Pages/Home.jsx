import { React ,useState} from "react";
import Slider from "./Components/Slider";
import Navbar from "./Components/Navbar";
import ProductCard from "./Components/ProductCard";
import ProductList from "./Components/ProductList";

function Home() {
  const [products, setProducts] = useState(ProductList);
  return (
    <>
      <Navbar />
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
          <div className="productCardContainer">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        </div>
      </div>
    </>
  );
}

export default Home;
