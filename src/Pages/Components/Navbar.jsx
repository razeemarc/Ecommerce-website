import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/Navbar.css";
import { useNavigate, Link } from "react-router-dom";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  const navRef = useRef();
  const navigate = useNavigate();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <span
        style={{ fontSize: "20px", marginLeft: "8px", cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        {" "}
        SHINE
      </span>
      
      <nav ref={navRef}>
    
        <a  href="/home" className="navbarMenu">Home</a>
        <a href="/shop" className="navbarMenu2" >Shop</a>
        <a href="/#"className="navbarMenu3">About</a>
        <a href="/#"className="navbarMenu4">Contact us</a>
        
        <button  className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <div className="iconsStyle">
        <Link
          activeClass="active"
          to="/wishlist"
          className="desktopMenuListItem"
        >
          <FontAwesomeIcon icon={faHeart} />{" "}
          <span className="hide-on-small-screen">Wishlist</span>
        </Link>
        <Link activeClass="active" to="/cart" className="desktopMenuListItem">
          <FontAwesomeIcon icon={faShoppingCart} />{" "}
          <span className="hide-on-small-screen">Cart</span>
        </Link>
      </div>
      <button onClick={() => navigate("/login")} className="btn-login">
        {" "}
        LOG IN{" "}
      </button>

      <button className="nav-btn " onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
