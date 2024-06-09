const Portfolio = () => {
  return (
    <>
      <header>
        <nav>
          <div className="flex-container nav-bar">
            {/* <!-- Logo Section -->  */}
            <div className="flex-container logo-container">
              <div className="logo-name">Anjan</div>
              <div className="line">|</div>
              <div>Soft.Engineer</div>
            </div>
            {/* <!-- Nav Items --> */}
            <ul className="flex-container nav-items">
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
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            {/* <!------->
          <!--Hamburger Menu--> */}
            <label for="menu">
              <i className="fa-solid fa-bars"></i>
            </label>
            <input type="checkbox" id="menu" />

            <div className="side-menu">
              <ul className="flex-container side-nav-items">
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
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            {/* <!-------------> */}
          </div>
        </nav>
      </header>
      {/* <!--------Dark Mode toggle-----------> */}
      <input type="checkbox" id="dark-mode" />
      <div className="wrapper-container">
        <label for="dark-mode" className="dark-mode-toggle">
          <i className="fa-solid fa-circle-half-stroke"></i>
        </label>

        {/* <!------------------->
      <!-- Header Section -->

      <!------->
      <!-- Hero Section --> */}
        <section id="Home">
          <div className="grid-container hero-section">
            <div className="flex-container intro-text ">
              <div>
                Hi I am <span>Anjan</span>{" "}
              </div>
              <div className="tag">Soft. Engineer</div>
              <p>I love coding!</p>
              <a href="./assets/portfolio.pdf" download>
                <button className="download-btn">
                  Download CV <i className="fa-solid fa-download"></i>
                </button>
              </a>
            </div>
            <div className="image-grid-item flex-container">
              <img src="./assets/profile-image.png" alt="profile image" />
            </div>
          </div>
        </section>
        {/* <!--  -->
      <!-- Summary Section --> */}
        <section>
          <div className="flex-container summary-container">
            <div className="flex-container">
              <i className="fa-solid fa-award"></i>
              <div>
                <span> IT</span>
                <p>Graduate</p>
              </div>
            </div>
            <div className="vertical-line">|</div>
            <div className="flex-container">
              <i className="fa-solid fa-award"></i>
              <div>
                <span> 5 + Projects</span>
                <p>Completed</p>
              </div>
            </div>
            <div className="vertical-line">|</div>
            <div className="flex-container">
              <i className="fa-solid fa-award"></i>
              <div>
                <span> 1 year</span>
                <p>Experience</p>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        {/* <!--  -->
      <!-- Skill Section --> */}
        <section id="skills">
          <div className="flex-container skills-container">
            <div>
              <i className="fa-brands fa-html5"></i>
              <p>HTML</p>
            </div>
            <div>
              <i className="fa-brands fa-css3-alt"></i>
              <p>CSS</p>
            </div>
            <div>
              <i className="fa-brands fa-js"></i>
              <p>JS</p>
            </div>
            <div>
              <i className="fa-brands fa-square-github"></i>
              <p>Github</p>
            </div>
            <div>
              <i className="fa-brands fa-figma"></i>
              <p>Figma</p>
            </div>
          </div>
        </section>
        {/* <!-- ---- -->
      <!-- Recent work section --> */}
        <section id="projects">
          <center>
            <h3>My Recent work</h3>
          </center>

          <div className="flex-container">
            {/* <!-- Recent work card 1 --> */}
            <div className="recent-work-card">
              <div className="card-image">
                <img src="./assets/project-1.png" alt="Project Image" />
              </div>
              <div className="card-icons">
                <a
                  href="https://github.com/anjanadhikari7/Sales-page"
                  target="_blank"
                >
                  {" "}
                  <i className="fa-brands fa-github"></i>{" "}
                </a>
                <a
                  href="https://anjanadhikari7.github.io/Sales-page/"
                  target="_blank"
                >
                  <i className="fa-brands fa-chrome"></i>
                </a>
              </div>
              <h4>Sales Page</h4>
              <p>HTML, CSS</p>
            </div>
            {/* <!-- Recent work card 2 --> */}
            <div className="recent-work-card">
              <div className="card-image">
                <img src="./assets/project-2.png" alt="Project Image" />
              </div>
              <div className="card-icons">
                <a
                  href="https://github.com/anjanadhikari7/Flashy-webpage"
                  target="_blank"
                >
                  {" "}
                  <i className="fa-brands fa-chrome"></i>{" "}
                </a>
                <a
                  href="https://anjanadhikari7.github.io/Flashy-webpage/"
                  target="_blank"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
              <h4>Flashy Webpage</h4>
              <p>HTML, CSS</p>
            </div>
            {/* <!-- Recent work card 3 --> */}
            <div className="recent-work-card">
              <div className="card-image">
                <img src="./assets/project-3.png" alt="Project Image" />
              </div>
              <div className="card-icons">
                <a
                  href="https://github.com/anjanadhikari7/Travel-blog"
                  target="_blank"
                >
                  {" "}
                  <i className="fa-brands fa-github"></i>{" "}
                </a>
                <a
                  href="https://anjanadhikari7.github.io/Travel-blog/"
                  target="_blank"
                >
                  <i className="fa-brands fa-chrome"></i>
                </a>
              </div>
              <h4>Travel Blog</h4>
              <p>HTML, CSS</p>
            </div>
            {/* <!-- Recent work card 4 --> */}
            <div className="recent-work-card">
              <div className="card-image">
                <img src="./assets/project-4.png" alt="Project Image" />
              </div>
              <div className="card-icons">
                <a
                  href="https://github.com/anjanadhikari7/Flexbox-Layout"
                  target="_blank"
                >
                  {" "}
                  <i className="fa-brands fa-github"></i>{" "}
                </a>
                <a
                  href="https://anjanadhikari7.github.io/Flexbox-Layout/"
                  target="_blank"
                >
                  <i className="fa-brands fa-chrome"></i>
                </a>
              </div>
              <h4>Flexbox Model</h4>
              <p>HTML, CSS</p>
            </div>
            {/* <!-- Recent work card 5 --> */}
            <div className="recent-work-card">
              <div className="card-image">
                <img src="./assets/project-5.png" alt="Project Image" />
              </div>
              <div className="card-icons">
                <a
                  href="https://github.com/anjanadhikari7/Grid-Layout"
                  target="_blank"
                >
                  {" "}
                  <i className="fa-brands fa-github"></i>{" "}
                </a>
                <a
                  href="https://anjanadhikari7.github.io/Grid-Layout/"
                  target="_blank"
                >
                  <i className="fa-brands fa-chrome"></i>
                </a>
              </div>
              <h4>Grid Layout</h4>
              <p>HTML, CSS</p>
            </div>
            {/* <!-- Recent work card 6 --> */}
            <div className="recent-work-card">
              <div className="card-image">
                <img src="./assets/project-6.png" alt="Project Image" />
              </div>
              <div className="card-icons">
                <a
                  href="https://github.com/anjanadhikari7/Form-basics"
                  target="_blank"
                >
                  {" "}
                  <i className="fa-brands fa-github"></i>{" "}
                </a>
                <a
                  href="https://anjanadhikari7.github.io/Form-basics/"
                  target="_blank"
                >
                  <i className="fa-brands fa-chrome"></i>
                </a>
              </div>
              <h4>HTML Form Basics</h4>
              <p>HTML, CSS</p>
            </div>
          </div>
        </section>
        {/* <!-- ---- -->
      <!-- About me section --> */}
        <section className="about-me-section" id="about">
          <center>
            <h2> About me</h2>
          </center>
          <div className="flex-container about-me-container">
            <div className="flex-container">
              <img src="./assets/profile-image.png" />
            </div>
            <div>
              <h3>Anjan Adhikari</h3>
              <p>
                {" "}
                In my journey, I blend creativity with practicality, fueled by
                an insatiable curiosity. From art to technology, I delve into
                diverse interests, embracing new experiences. Challenges are met
                with determination, as I navigate life's complexities with
                resilience and grace. Empathy guides my interactions, fostering
                genuine connections and understanding. Each moment is an
                opportunity for growth, and I approach it with purpose and
                authenticity. My journey is a testament to my commitment to
                continuous learning and self-improvement, inspiring others along
                the way.
              </p>
              <p> Sydney, Australia</p>
              <div>
                <div className="tag">Interest</div>
                <div className="flex-container">
                  <span>Coding</span>
                  <span>Football</span>
                  <span>Super Hero Movies</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        {/* <!-- --- -->
      <!-- Get in touch section --> */}
        <section id="contact">
          <center>
            <h2>Get in Touch</h2>
          </center>
          <div>
            <div className="flex-container social-container">
              <a
                href="https://www.linkedin.com/in/anjan-adhikari-b0104018b/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/anjanadhikari7" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
          <center>
            <h2> OR </h2>
            <div>
              <a href="mailto:anjanadhikari7@gmail.com">
                <button className="contact-btn">
                  anjanadhikari7@gmail.com{" "}
                  <i className="fa-brands fa-telegram"></i>
                </button>
              </a>
            </div>
          </center>
        </section>
        {/* <!-- ----- --> */}

        {/* <!-- Footer Section --> */}
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
      </div>
    </>
  );
};

export default Portfolio;
