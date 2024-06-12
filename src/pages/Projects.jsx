import ProjectCard from "../Components/ProjectCard";
import projectImage1 from "../assets/project-1.png";
import projectImage2 from "../assets/project-2.png";
import projectImage3 from "../assets/project-3.png";
import projectImage4 from "../assets/project-4.png";
import projectImage5 from "../assets/project-5.png";
import projectImage6 from "../assets/project-6.png";

const ProjectsPage = () => {
  const ProjectNumber = [
    {
      image: projectImage1,
      github: "https://github.com/anjanadhikari7/Sales-page",
      web: "https://anjanadhikari7.github.io/Sales-page/",
      description: "Sales Page",
      language: "HTML, CSS",
    },
    {
      image: projectImage2,
      github: "https://github.com/anjanadhikari7/Flashy-webpage",
      web: "https://anjanadhikari7.github.io/Flashy-webpage/",
      description: "Flashy Webpage",
      language: "HTML, CSS",
    },
    {
      image: projectImage3,
      github: "https://github.com/anjanadhikari7/Travel-blog",
      web: "https://anjanadhikari7.github.io/Travel-blog/",
      description: "Travel Blog",
      language: "HTML, CSS",
    },
    {
      image: projectImage4,
      github: "https://github.com/anjanadhikari7/Flexbox-Layout",
      web: "https://anjanadhikari7.github.io/Flexbox-Layout/",
      description: "Flexbox Model",
      language: "HTML, CSS",
    },
    {
      image: projectImage5,
      github: "https://github.com/anjanadhikari7/Grid-Layout",
      web: "https://anjanadhikari7.github.io/Grid-Layout/",
      description: "Grid Layout",
      language: "HTML, CSS",
    },
    {
      image: projectImage6,
      github: "https://github.com/anjanadhikari7/Form-basics",
      web: "https://anjanadhikari7.github.io/Form-basics/",
      description: "HTML Form Basics",
      language: "HTML, CSS",
    },
  ];
  return (
    <section id="projects">
      <center>
        <h3>My Recent work</h3>
      </center>

      <div className="flex-container">
        {ProjectNumber.map((item) => (
          <ProjectCard
            image={item.image}
            github={item.github}
            web={item.web}
            description={item.description}
            language={item.language}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
