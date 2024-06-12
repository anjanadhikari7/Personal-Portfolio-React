const Summary = () => {
  return (
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
  );
};

export default Summary;
