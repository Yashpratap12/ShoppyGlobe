import "./productdetail.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../src/utils/useFetch";
import { useDispatch } from "react-redux";
import { addItem } from "../../src/utils/cartSlice";
import { Link } from "react-router-dom";
function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data, loading, error } = useFetch("https://dummyjson.com/products");
  const [filter, setFilter] = useState([]);
  const [cartitem, setcartitem] = useState(null);

  useEffect(() => {
    if (data) {
      const productList = data.products;
      const filteredProducts = productList.filter(
        (product) => product.id.toString() === id.toString()
      );
      setFilter(filteredProducts);
      setcartitem(filteredProducts[0]);
    }
  }, [data, id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  function handleCart() {
    dispatch(addItem(cartitem));
    alert("Item added successfully");
  }

  return (
    <div className="product-detail-container">
      {filter.map((product) => (
        <div className="product-detail-card" key={product.id}>
          <div className="image-detail-container">
            <img src={product.images[0]} alt={product.title} />
            <div className="buy-now-buttons">
              <button onClick={handleCart}>Add to Cart</button>
              <Link to="/checkout">
                {" "}
                <button> Buy Now</button>
              </Link>
            </div>
          </div>
          <div className="product-details">
            <h3>{product.brand}</h3>
            <h1>{product.title}</h1>
            <p>Special Price</p>
            <div className="price-container">
              <p>₹{product.price}</p>
              <p>{product.discountPercentage}% off</p>
            </div>
            <div className="products-info">
              <p>{product.description}</p>
              <p>
                Availability: <span>{product.availabilityStatus}</span>
              </p>
              <p>Minimum Order Quantity: {product.minimumOrderQuantity}</p>
            </div>
            <br />
            <hr />
            <div className="warranty-container">
              <div className="warranty-images">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3757/3757891.png"
                  alt=""
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/128/11153/11153363.png"
                  alt=""
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/128/18415/18415843.png"
                  alt=""
                />
              </div>
              <div className="warranty-details">
                <p>{product.shippingInformation}</p>
                <p>{product.returnPolicy}</p>
                <p>{product.warrantyInformation}</p>
              </div>
            </div>
            <br />
            <hr />
            <h6>Additional Information</h6>
            <br />
            <div className="additional-informations">
              <ul>
                <li>
                  Height : {product.dimensions.height}, Width :{" "}
                  {product.dimensions.width} , Depth :{" "}
                  {product.dimensions.depth}
                </li>
                <li>
                  Type : {product.tags[0]}, {product.tags[1]}
                </li>
                <li> Weight : {product.weight}</li>
                <li>Current Stock : {product.stock} Unit</li>
                <li>Warranty : {product.warrantyInformation}</li>
                <li>Return Policy : {product.returnPolicy}</li>
              </ul>
            </div>
            <br />
            <hr />
            <h6>Customer's Review</h6>
            <div className="customer-review-container">
              {product.reviews.map((review, index) => (
                <div className="customer-review-card" key={index}>
                  <p>{review.reviewerName}</p>
                  <p>{review.reviewerEmail}</p>
                  <p>Rating: {review.rating}</p>
                  <p>{review.comment}</p>
                  <p>{review.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductDetails;
