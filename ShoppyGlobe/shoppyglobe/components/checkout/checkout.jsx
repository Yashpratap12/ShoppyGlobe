import "./checkout.css";
import { Link } from "react-router-dom";
function Checkout() {
  function handleClick() {
    alert(
      "Order Placed successfully! You will be redirected to the product list page."
    );
  }

  return (
    <div className="checkout-container">
      <h1>Checkout Page</h1>
      <div className="billing-container">
        <div className="billing-container2">
          <h3>Address</h3>
          <div className="billing-name">
            <input type="text" placeholder="Enter first name" />
            <input type="text" placeholder="Enter last name" />
          </div>
          <div className="billing-address1">
            <input type="text" placeholder="Enter street address" />
          </div>
          <div className="billing-address2">
            <input type="text" placeholder="Apt/Suite/Floor/House No." />
          </div>
          <div className="billing-address3">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
            <input type="text" placeholder="Zip Code" />
          </div>
          <div className="billing-contact-heading">
            <h2>Contact Info</h2>
          </div>
          <div className="contact-info">
            <input type="number" placeholder="Enter mobile number" />
            <input type="email" placeholder="Enter Email" required />
          </div>
          <div className="place-order">
            <Link to="/productlist">
              {" "}
              <button onClick={handleClick}>Place Order</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
