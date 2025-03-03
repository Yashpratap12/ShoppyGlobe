// Importing the CSS file for styling the Footer component
import "./footer.css";

// Defining the Footer component
function Footer() {
  return (
    <div className="footer-container">
      {/* A container for footer content */}
      <div className="footer-content">
        {/* GitHub link with an icon */}
        <div className="github">
          <a href="https://github.com/IshanTheDeveloper" target="_blank">
            <img
              src="https://cdn-icons-png.flaticon.com/128/25/25231.png"
              alt=""
            />
          </a>
        </div>

        {/* LinkedIn link with an icon */}
        <div className="linkedin">
          <a
            href="https://www.linkedin.com/in/ishan-jaiswal-6146202b6/"
            target="_blank"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/1384/1384014.png"
              alt=""
            />
          </a>
        </div>

        {/* Instagram link with an icon */}
        <div className="instagram">
          <a
            href="https://www.instagram.com/meishanjaiswal/?next=%2F&hl=en"
            target="_blank"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/1384/1384015.png"
              alt=""
            />
          </a>
        </div>

        {/* LeetCode link with an icon */}
        <div className="leetcode">
          <a href="https://leetcode.com/u/ishanjais2001/" target="_blank">
            <img
              src="https://cdn-icons-png.flaticon.com/128/9777/9777458.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}

// Exporting the Footer component as the default export
export default Footer;
