import ProjectCard from "../Components/ProjectCard";
import projectImage1 from "../assets/project-1.png";
import projectImage2 from "../assets/project-2.png";
import projectImage3 from "../assets/project-3.png";
import projectImage4 from "../assets/project-4.png";
import projectImage5 from "../assets/project-5.png";
import projectImage6 from "../assets/project-6.png";

const ProjectsPage = () => {
  const ProjectNumber = [1, 2, 3, 4, 5, 6];
  return (
    <section id="projects">
      <center>
        <h3>My Recent work</h3>
      </center>

      <div className="flex-container">
        {ProjectNumber.map((item) => (
          <ProjectCard />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
