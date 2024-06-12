const Projects = () => {
  return (
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
  );
};

export default Projects;
