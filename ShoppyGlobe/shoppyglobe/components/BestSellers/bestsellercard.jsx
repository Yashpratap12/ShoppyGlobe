// Importing the Link component from react-router-dom for navigation
import { Link } from "react-router-dom";

// Importing CSS for styling the BestsellerCard component
import "./bestseller.css";

// Defining the BestsellerCard component that accepts props to display product details
function BestsellerCard(props) {
  return (
    <div className="bestseller-card">
      {/* Displaying the product image */}
      <div className="bestseller-image">
        <img src={props.url} alt="" width="40px" />{" "}
        {/* Product image with dynamic source */}
      </div>

      {/* Displaying the product name */}
      <h1>{props.name}</h1>

      {/* Displaying the product brand */}
      <h3>{props.brand}</h3>

      {/* Displaying the product price and rating */}
      <div className="rating-price">
        <p>
          Price : <span>{props.price}</span> {/* Dynamic product price */}
        </p>
        <p>
          Rating : <span>{props.rating}</span> {/* Dynamic product rating */}
        </p>
      </div>

      {/* Providing a link to the product details page */}
      <div className="view-more">
        <Link to={`/productlist/${props.id}`}>Buy Now</Link>
        {/* The `Link` component navigates to the product detail page dynamically based on the product ID */}
      </div>
    </div>
  );
}

// Exporting the BestsellerCard component as the default export
export default BestsellerCard;
