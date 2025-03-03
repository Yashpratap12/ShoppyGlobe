// Importing CSS for styling the Contact component
import "./contact.css";

// Importing the Link component from react-router-dom for navigation between routes
import { Link } from "react-router-dom";

// Defining the Contact component
function Contact() {
  // Function to handle the click event of the "Submit" button
  function handleClick() {
    alert("Contact details submitted successfully..."); // Displaying a success message
  }

  return (
    <div className="contact-container">
      {/* Header section containing the company logo and name */}
      <div className="contact-heading">
        <img
          src="https://i.pinimg.com/originals/6d/b9/31/6db931827443a7455a4b805fe5829820.png" // Company logo
          alt=""
          width="90px"
        />
        <h1>ShoppyGlobe</h1> {/* Company name */}
      </div>

      {/* Main content of the contact form */}
      <div className="contact-page">
        <h2>Get in touch</h2> {/* Section heading */}
        {/* Name input field */}
        <div className="name">
          <h3>
            Name<sup>*</sup> :
          </h3>
          <input type="text" placeholder="Enter full name" /> {/* Name input */}
        </div>
        {/* Email input field */}
        <div className="email">
          <h3>
            Email<sup>*</sup> :
          </h3>
          <input type="email" name="" id="" placeholder="Enter email" />{" "}
          {/* Email input */}
        </div>
        {/* Mobile number input field */}
        <div className="number">
          <h3>
            Mobile<sup>*</sup> :
          </h3>
          <input
            type="number"
            name=""
            id=""
            placeholder="Enter mobile number"
          />{" "}
          {/* Mobile number input */}
        </div>
        {/* Textarea for additional details */}
        <div className="contact-description">
          <h3>
            Tell us more about what we can help with<sup>*</sup>
          </h3>
          <textarea name="" id=""></textarea> {/* Description input */}
        </div>
        {/* Buttons for form submission and navigation */}
        <div className="submit-button">
          {/* Submit button with an alert message */}
          <Link to="/productlist">
            <button onClick={handleClick}>Submit</button>
          </Link>

          {/* Button to navigate back to the homepage */}
          <Link to="/home">
            <button>Go to Homepage</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

// Exporting the Contact component as the default export
export default Contact;
