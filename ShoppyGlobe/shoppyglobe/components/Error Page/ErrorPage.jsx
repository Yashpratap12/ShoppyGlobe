// Importing CSS for styling the ErrorPage component
import "./error.css";

// Importing the Link component from react-router-dom for navigation
import { Link } from "react-router-dom";

// Importing the useRouteError hook from react-router-dom to access route error details
import { useRouteError } from "react-router-dom";

// Defining the ErrorPage component
function ErrorPage() {
  // Using the useRouteError hook to retrieve error information for the current route
  const err = useRouteError();

  return (
    <div className="error-container">
      {/* Displaying a generic error heading */}
      <h1 className="heading">Error</h1>

      {/* Displaying the status code of the error */}
      <div className="status">{err.status}</div>

      {/* Displaying the status text of the error */}
      <p className="para1">Page {err.statusText}</p>

      {/* Displaying a warning with the error stack trace */}
      <h3 className="warning">Warning : {err.error.stack}</h3>

      {/* Displaying an error message to inform the user about the issue */}
      <p className="para2">
        The page you are trying to access doesn't exist or has been moved
      </p>

      {/* Suggesting the user go back to the homepage */}
      <p className="para3">Try going back to homepage.</p>

      {/* Link to navigate back to the homepage */}
      <Link to="/">
        <button className="homepage-button">Go to homepage</button>
      </Link>
    </div>
  );
}

// Exporting the ErrorPage component as the default export
export default ErrorPage;
