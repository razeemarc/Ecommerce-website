import {React,useState} from "react";
import Slider from "./Components/Slider";
import Navbar from "./Components/Navbar";
import {Card} from "react-bootstrap"
import ProductList from "./Components/ProductList";
import { useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as before } from '@fortawesome/free-regular-svg-icons';
import { faHeart as after } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { addItemWishList } from '../redux/reducer/wishlist';
function Home() {
  const Navigate =useNavigate();
  const dispatch = useDispatch()
  //filter Products based on Category
  const [data, setData] = useState(ProductList);

  const [wishIcons, setWishIcons] = useState(before);

  const handleChange = () => {
    setWishIcons(prevIcons => prevIcons === before ? after : before);

    if (wishIcons === before) {
      dispatch(addItemWishList(data));
    }
  };
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
          <div className="shop-container" style={{margin:'15px 45px 0 45px'}} >
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
                    <div> <span>Price: {values.price}/-</span>
                    
                    <FontAwesomeIcon style={{marginLeft:'130px'}}
          icon={wishIcons}
          className={`wishIcon ${wishIcons === after ? 'active-wish-icon' : ''}`}
          onClick={handleChange}
        />
                 </div>   
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
