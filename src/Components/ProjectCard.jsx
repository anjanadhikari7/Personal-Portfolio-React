import projectImage from "../assets/project-1.png";
const ProjectCard = () => {
  return (
    <>
      <div className="recent-work-card">
        <div className="card-image">
          <img src={projectImage} alt="Project Image" />
        </div>
        <div className="card-icons">
          <a
            href="https://github.com/anjanadhikari7/Sales-page"
            target="_blank"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          &nbsp;&nbsp;
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
    </>
  );
};

export default ProjectCard;
