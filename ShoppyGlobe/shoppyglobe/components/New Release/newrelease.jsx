import "./newrelease.css";
import useFetch from "../../src/utils/useFetch";
import { useEffect, useState } from "react";
import NewreleaseCard from "./newreleasecard";

function NewRelease() {
  const { data, loading, error } = useFetch("https://dummyjson.com/products");
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    if (data) {
      const productList = data.products;
      const filteredProducts = productList.filter(
        (product) => product.id % 1.5 === 0
      );
      setFilter(filteredProducts);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="newrelease-heading">
        <h1>New Release</h1>
      </div>
      <div className="newrelease-items">
        {filter.map((product) => (
          <NewreleaseCard
            key={product.id}
            id={product.id}
            name={product.title}
            brand={product.brand}
            url={product.images[0]}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
    </>
  );
}

export default NewRelease;
