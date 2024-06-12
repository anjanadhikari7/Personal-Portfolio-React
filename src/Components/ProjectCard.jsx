const ProjectCard = (props) => {
  const { image, github, web, description, language } = props;
  return (
    <>
      <div className="recent-work-card">
        <div className="card-image">
          <img src={image} alt="Project Image" />
        </div>
        <div className="card-icons">
          <a href={github} target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          &nbsp;&nbsp;
          <a href={web} target="_blank">
            <i className="fa-brands fa-chrome"></i>
          </a>
        </div>
        <h4>{description}</h4>
        <p>{language}</p>
      </div>
    </>
  );
};

export default ProjectCard;
