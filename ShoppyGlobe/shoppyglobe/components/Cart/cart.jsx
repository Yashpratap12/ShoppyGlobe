// Importing CSS for styling the Cart component
import "./cart.css";

// Importing the useSelector hook from react-redux to access the Redux store
import { useSelector } from "react-redux";

// Importing the CartCard component to display individual cart items
import CartCard from "./cartCard";

// Importing the clearCart action from the cartSlice to handle cart clearing
import { clearCart } from "../../src/utils/cartSlice";

// Importing the useDispatch hook from react-redux to dispatch actions to the Redux store
import { useDispatch } from "react-redux";

// Defining the Cart component
function Cart() {
  // Using the useSelector hook to access the `cart.items` state from the Redux store
  const cartItems = useSelector((store) => store.cart.items);

  // Using the useDispatch hook to get the dispatch function for dispatching actions
  const dispatch = useDispatch();

  // Function to handle clearing the cart when the "Clear" button is clicked
  function handleClick() {
    dispatch(clearCart()); // Dispatching the clearCart action to reset the cart state in the store
  }

  return (
    <div className="cart-container1">
      {/* Displaying the cart title */}
      <h1>Shopping Cart</h1>

      {/* Container for cart items */}
      <div className="cart-container2">
        {/* Mapping over cartItems and rendering a CartCard for each item */}
        {cartItems.map((item) => (
          <CartCard
            key={item.id} // Unique key for each cart item
            id={item.id} // Product ID
            name={item.title} // Product name
            brand={item.brand} // Product brand
            url={item.images[0]} // Product image (first in the list)
            price={item.price} // Product price
            offer={item.discountPercentage} // Product discount percentage
          />
        ))}
      </div>

      {/* Button to clear all items from the cart */}
      <button onClick={handleClick} className="clear-button">
        Clear {/* Clear button text */}
        <img
          src="https://cdn-icons-png.flaticon.com/128/10423/10423315.png" // Icon for the button
          alt=""
          width="25px"
        />
      </button>
    </div>
  );
}

// Exporting the Cart component as the default export
export default Cart;
