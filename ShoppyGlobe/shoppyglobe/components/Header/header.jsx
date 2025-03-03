// Importing the CSS file for styling the Header component
import "./header.css";

// Importing the Link component from react-router-dom for navigation
import { Link } from "react-router-dom";

// Importing the useSelector hook from react-redux to access the Redux store
import { useSelector } from "react-redux";

// Defining the Header component
function Header() {
  // Accessing the cart items from the Redux store
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="navbar-container">
      {/* Main navigation bar */}
      <div className="navbar">
        {/* Navigation links for different routes */}
        <Link to="/home">Home</Link>
        <Link to="/productlist">Product List</Link>
        <Link to="bestseller">Best Sellers</Link>
        <Link to="/newrelease">New Release</Link>
        <Link to="/contactus">Contact Us</Link>

        {/* Cart link with dynamic cart item count */}
        <Link to="/cart">
          {/* Displaying the number of items in the cart */}
          <span className="cart-text">{cartItems.length}</span>

          {/* Cart icon */}
          <img
            src="https://cdn-icons-png.flaticon.com/128/1170/1170576.png"
            alt=""
            width="60px"
            className="cart-images"
          />
        </Link>
      </div>
    </div>
  );
}

// Exporting the Header component as the default export
export default Header;
