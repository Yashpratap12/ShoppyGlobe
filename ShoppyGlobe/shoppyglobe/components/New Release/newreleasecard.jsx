import { Link } from "react-router-dom";
import "./newrelease.css";
function NewreleaseCard(props) {
  return (
    <div className="newrelease-card">
      <div className="newrelease-image">
        <img src={props.url} alt="" width="40px" />
      </div>
      <h1>{props.name}</h1>
      <h3>{props.brand}</h3>
      <div className="rating-price">
        <p>
          {" "}
          Price : <span>{props.price}</span>
        </p>
        <p>
          Rating : <span>{props.rating}</span>
        </p>
      </div>
      <div className="view-more">
        <Link to={`/productlist/${props.id}`}>Buy Now</Link>
      </div>
    </div>
  );
}
export default NewreleaseCard;
