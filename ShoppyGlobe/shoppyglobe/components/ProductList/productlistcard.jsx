import "./productlist.css";
import { Link } from "react-router-dom";
function ProductListCard(props) {
  return (
    <div className="product-list-cards">
      <div className="product-list-card">
        <div className="image-container">
          <img src={props.url} width="80px" />
        </div>
        <h3>{props.name}</h3>
      </div>
      <div className="product-detail-card1">
        <Link to={`/productlist/${props.id}`}>Buy Now</Link>
      </div>
    </div>
  );
}
export default ProductListCard;
