import profileImage from "../assets/profile-image.png";
const HomePage = () => {
  return (
    <>
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
            <img src={profileImage} alt="profile image" />
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
    </>
  );
};

export default HomePage;
