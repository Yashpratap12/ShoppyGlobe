// Fetch data from the API
export const product = [
    fetch("https://dummyjson.com/products")
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => {
        // Handle the data (log it to the console or use it as needed)
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch operation
        console.error("Error fetching data:", error);
      }),
  ];
  