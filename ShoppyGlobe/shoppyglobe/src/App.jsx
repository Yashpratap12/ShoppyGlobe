import { Outlet } from "react-router-dom";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import { Provider } from "react-redux";
import productStore from "./utils/productStore"; // Import your store

function App() {
  return (
    <Provider store={productStore}>
      {" "}
      {/* Provide Redux store */}
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
}

export default App;
