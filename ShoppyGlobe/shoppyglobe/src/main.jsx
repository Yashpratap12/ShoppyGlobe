import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Checkout from "../components/checkout/checkout.jsx";
const App = lazy(() => import("./App.jsx"));
// Lazily loading the `App` component. This component will only be fetched when required, optimizing the app's initial load time.

const ProductDetails = lazy(() =>
  import("../components/ProductDetails/productDetails.jsx")
);
// Lazily loading the `ProductDetails` component, which displays details of a specific product.

const ErrorPage = lazy(() => import("../components/Error Page/ErrorPage.jsx"));
// Lazily loading the `ErrorPage` component to display error messages for invalid or unhandled routes.

const Bestseller = lazy(() =>
  import("../components/BestSellers/bestseller.jsx")
);
// Lazily loading the `Bestseller` component, which showcases the best-selling products.

const NewRelease = lazy(() =>
  import("../components/New Release/newrelease.jsx")
);
// Lazily loading the `NewRelease` component, which lists newly released products.

const Contact = lazy(() => import("../components/Contact/contact.jsx"));
// Lazily loading the `Contact` component for displaying the contact form.

const ProductList = lazy(() =>
  import("../components/ProductList/productlist.jsx")
);
// Lazily loading the `ProductList` component that shows a list of all products.

const ProductItem = lazy(() =>
  import("../components/homepagecard/productitem.jsx")
);
// Lazily loading the `ProductItem` component, which may display individual product items or homepage-related content.

const Cart = lazy(() => import("../components/Cart/cart.jsx"));
// Lazily loading the `Cart` component that handles the user's shopping cart.

const appRouter = createBrowserRouter([
  // Creating a router using `createBrowserRouter` with a configuration array.

  {
    path: "/",
    // Root path ("/") of the application.

    element: (
      <Suspense fallback={<div>Loading...</div>}>
        {/* Wrapping the root element with `Suspense` to display "Loading..." while waiting for the `App` component to load. */}
        <App />
      </Suspense>
    ),

    errorElement: <ErrorPage />,
    // Specifying the `ErrorPage` component to display for unhandled routes or navigation errors.

    children: [
      // Defining child routes that inherit from the root path.

      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            {/* Wrapping the `ProductItem` component with `Suspense`. */}
            <ProductItem />
          </Suspense>
        ),
      },
      // "/" path: Displays the `ProductItem` component (likely the homepage content).

      {
        path: "/home",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            {/* Duplicate of the root route but accessible via "/home". */}
            <ProductItem />
          </Suspense>
        ),
      },

      {
        path: "/productdetails",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            {/* Route for displaying all products using the `ProductList` component. */}
            <ProductList />
          </Suspense>
        ),
      },

      {
        path: "/bestseller",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            {/* Route for the bestseller page, showing best-selling products. */}
            <Bestseller />
          </Suspense>
        ),
      },

      {
        path: "/newrelease",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            {/* Route for the new release page, displaying newly released products. */}
            <NewRelease />
          </Suspense>
        ),
      },

      {
        path: "/contactus",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            {/* Route for the contact page, rendering the `Contact` component. */}
            <Contact />
          </Suspense>
        ),
      },

      {
        path: "/productlist",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            {/* Route for displaying a complete product list using the `ProductList` component. */}
            <ProductList />
          </Suspense>
        ),
      },

      {
        path: "/productlist/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            {/* Dynamic route with a parameter (`:id`) for displaying individual product details. */}
            <ProductDetails />
          </Suspense>
        ),
      },

      {
        path: "/cart",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            {/* Route for displaying the shopping cart using the `Cart` component. */}
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  // Initializing the React app by mounting it to the root DOM node.

  <StrictMode>
    {/* Wrapping the app in `StrictMode` to enable extra checks and warnings during development. */}
    <RouterProvider router={appRouter} />
    {/* Providing the router to the application using `RouterProvider`. */}
  </StrictMode>
);
// Rendering the app using React 18's `createRoot` method, with the router and StrictMode enabled.
