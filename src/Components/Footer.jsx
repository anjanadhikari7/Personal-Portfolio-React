const Footer = () => {
  return (
    <footer>
      <div className="flex-container footer-container">
        <div>
          <h4>Links</h4>
          <ul className="footer-link">
            <li>
              <a href="#Home">Home </a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
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
      {/* <!-- Go to top Section --> */}
      <div className="go-to-top">
        <a href="#Home">
          <i className="fa-solid fa-angle-up"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
