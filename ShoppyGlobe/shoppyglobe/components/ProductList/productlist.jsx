import useFetch from "../../src/utils/useFetch";
import { useEffect, useState } from "react";
import ProductListCard from "./productlistcard";
import "./productlist.css";
function ProductList() {
  const { data, loading, error } = useFetch("https://dummyjson.com/products");
  const [filterss, setFilter] = useState([]);
  const [filtered, setFiltered] = useState("");

  useEffect(() => {
    if (data) {
      const productList = data.products;
      setFilter(productList);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  function handleClick() {
    const filteredProduct = data.products.filter((product) =>
      product.title.toLowerCase().includes(filtered.toLowerCase())
    );
    setFilter(filteredProduct);
  }

  return (
    <>
      <div className="search-product">
        <input
          type="text"
          value={filtered}
          placeholder="Search product "
          onChange={(e) => setFiltered(e.target.value)}
        />
        <button onClick={handleClick}>Search</button>
      </div>
      <div className="productlist-items">
        {filterss.map((product) => (
          <ProductListCard
            key={product.id}
            id={product.id}
            name={product.title}
            url={product.thumbnail}
          />
        ))}
      </div>
    </>
  );
}

export default ProductList;
