import { Link } from "react-router-dom";

const Footer = () => {
  console.log("test");
  return (
    <footer>
      <div className="flex-container footer-container">
        <div>
          <h4>Links</h4>
          <ul className="footer-link">
            <li>
              <Link to="/Home">Home </Link>
            </li>
            <li>
              <Link to="/skills">Skills </Link>
            </li>
            <li>
              <Link to="/project">Project </Link>
            </li>
            <li>
              <Link to="/about">About </Link>
            </li>
            <li>
              <Link to="/contact">Contact </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Social links </h4>
          <ul className="footer-link">
            <li>
              <a
                href="https://www.linkedin.com/in/anjan-adhikari-b0104018b/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/anjanadhikari7" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/" target="_blank">
                Youtube
              </a>
            </li>
          </ul>
        </div>
      </div>
      <center>&copy; Copy right all reserved. Made by me</center>

      <div className="go-to-top">
        <a href="#Home">
          <i className="fa-solid fa-angle-up"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
