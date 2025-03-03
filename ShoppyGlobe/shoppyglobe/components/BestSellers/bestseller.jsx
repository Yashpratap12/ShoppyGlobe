// Importing the necessary CSS for styling
import "./bestseller.css";

// Importing a custom hook to fetch data from an API
import useFetch from "../../src/utils/useFetch";

// Importing React hooks for managing state and side effects
import { useEffect, useState } from "react";

// Importing the BestsellerCard component to display individual product details
import BestsellerCard from "./bestsellercard";

// Defining the Bestseller component
function Bestseller() {
  // Destructuring the data, loading, and error states from the useFetch hook
  const { data, loading, error } = useFetch("https://dummyjson.com/products");

  // Declaring a state variable to store the filtered product list
  const [filter, setFilter] = useState([]);

  // Using useEffect to process data whenever it changes
  useEffect(() => {
    if (data) {
      // Extracting the product list from the fetched data
      const productList = data.products;

      // Filtering products where the product ID is divisible by 4
      const filteredProducts = productList.filter(
        (product) => product.id % 4 === 0
      );

      // Updating the filter state with the filtered product list
      setFilter(filteredProducts);
    }
  }, [data]); // Dependency array ensures this effect runs only when 'data' changes

  // Display a loading message while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // Display an error message if there is an error during data fetching
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Rendering the Best Sellers heading and the filtered product list
  return (
    <>
      <div className="bestseller-heading">
        <h1>Best Sellers</h1> {/* Section heading */}
      </div>
      <div className="bestseller-items">
        {/* Mapping over the filtered product list and rendering a BestsellerCard for each */}
        {filter.map((product) => (
          <BestsellerCard
            key={product.id} // Unique key for React rendering
            id={product.id} // Product ID
            name={product.title} // Product title
            brand={product.brand} // Product brand
            url={product.images[0]} // First product image
            price={product.price} // Product price
            rating={product.rating} // Product rating
          />
        ))}
      </div>
    </>
  );
}

// Exporting the Bestseller component as the default export
export default Bestseller;
