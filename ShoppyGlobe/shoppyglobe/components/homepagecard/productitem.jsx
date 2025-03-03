// Importing CSS file for styling the ProductItem component
import "./homepagecard.css";

// Importing React hooks for state management and side effects
import { useEffect, useState } from "react";

// Importing a custom hook to fetch data from an API
import useFetch from "../../src/utils/useFetch";

// Importing a child component to display individual product items
import Prouctitemcard from "./productItemCard";

function ProductItem() {
  // Using the custom hook `useFetch` to fetch data from the API
  const { data, loading, error } = useFetch("https://dummyjson.com/products");

  // State to store filtered product data
  const [filter, setFilter] = useState([]);

  // Side effect to process the fetched data and apply filtering
  useEffect(() => {
    if (data) {
      const productList = data.products;

      // Filtering the products (currently includes all products due to `% 1 === 0`)
      const filteredProducts = productList.filter(
        (product) => product.id % 1 === 0
      );

      setFilter(filteredProducts); // Updating the state with filtered products
    }
  }, [data]); // Dependency array ensures this runs when `data` changes

  // Handling loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Handling error state
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="homepage-card-container">
      {/* Header section with a logo and title */}
      <div className="homepage-headings">
        <img
          src="https://i.pinimg.com/originals/6d/b9/31/6db931827443a7455a4b805fe5829820.png"
          alt=""
          width="90px"
        />
        <h1>ShoppyGlobe</h1>
      </div>

      {/* Scrolling product images displayed using a marquee */}
      <div className="homepage-image">
        <marquee
          behavior="scroll"
          direction="left"
          className="horizontal-marquee"
        >
          <div className="image-containers">
            {/* Rendering individual product items */}
            {filter.map((data) => (
              <Prouctitemcard key={data.id} url={data.images[0]} />
            ))}
          </div>
        </marquee>
      </div>
    </div>
  );
}

export default ProductItem;
