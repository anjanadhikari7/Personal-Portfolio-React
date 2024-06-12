import profileImage from "../assets/profile-image.png";
const Hero = () => {
  return (
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
  );
};

export default Hero;
