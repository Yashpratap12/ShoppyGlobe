// Importing CSS for styling the CartCard component
import "./cart.css";

// Importing the useDispatch hook from react-redux to dispatch actions to the Redux store
import { useDispatch } from "react-redux";

// Importing the removeItem action from cartSlice to handle item removal from the cart
import { removeItem } from "../../src/utils/cartSlice";

// Defining the CartCard component to display individual cart item details
function CartCard(props) {
  // Using the useDispatch hook to get the dispatch function for dispatching actions
  const dispatch = useDispatch();

  // Function to handle the removal of an item when the "Remove" button is clicked
  function handleClick() {
    console.log("Removing item with ID:", props.id); // Logging the ID of the item to be removed
    dispatch(removeItem(props.id)); // Dispatching the removeItem action with the item's ID
  }

  return (
    <div className="cart-card">
      {/* Displaying the product image */}
      <div className="cart-image">
        <img src={props.url} alt={props.name} width="100px" />{" "}
        {/* Product image */}
      </div>

      {/* Displaying the product details */}
      <div className="cart-detail">
        <h2>{props.name}</h2> {/* Product name */}
        <h3>{props.brand}</h3> {/* Product brand */}
        <div className="price-offer">
          <p> ₹{props.price}</p> {/* Product price */}
          <p>{props.offer} % off</p> {/* Discount percentage */}
        </div>
        {/* Button to remove the item from the cart */}
        <button onClick={handleClick}>Remove</button>
      </div>
    </div>
  );
}

// Exporting the CartCard component as the default export
export default CartCard;
