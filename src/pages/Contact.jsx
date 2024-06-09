const ContactPage = () => {
  return (
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
              anjanadhikari7@gmail.com <i className="fa-brands fa-telegram"></i>
            </button>
          </a>
        </div>
      </center>
    </section>
  );
};

export default ContactPage;
