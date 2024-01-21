import { useRef } from "react";
import { FaBars, FaTimes,FaRegHeart,FaShoppingCart } from "react-icons/fa";
import "../Styles/Navbar.css";
import { useNavigate } from 'react-router-dom';

function Navbar() {
	const navRef = useRef();
	const navigate = useNavigate();
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<span style ={{fontSize:'20px',marginLeft:'8px'}}> SHINE</span>
			<nav ref={navRef}>
				<a href="/home">Home</a>
				<a href="/products">Shop</a>
				<a href="/#">About</a>
				<a href="/#">Contact us</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
				
			</nav>
			<div className="iconsStyle">
        <FaRegHeart className="icons" />
        <FaShoppingCart className="icons" />		
      </div>
			
	<button onClick={()=>navigate("/login")} className="btn-login"> LOG IN </button>
			
			<button
				className="nav-btn "
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
