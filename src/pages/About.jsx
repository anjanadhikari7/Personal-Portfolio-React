const AboutPage = () => {
  return (
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
            In my journey, I blend creativity with practicality, fueled by an
            insatiable curiosity. From art to technology, I delve into diverse
            interests, embracing new experiences. Challenges are met with
            determination, as I navigate life's complexities with resilience and
            grace. Empathy guides my interactions, fostering genuine connections
            and understanding. Each moment is an opportunity growth, and I
            approach it with purpose and authenticity. My journey is a testament
            to my commitment to continuous learning and self-improvement,
            inspiring others along the way.
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
  );
};

export default AboutPage;
