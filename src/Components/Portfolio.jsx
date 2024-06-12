import About from "./About";
import Contact from "./Contact";
import DarkMode from "./DarkMode";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import Summary from "./Summary";

const Portfolio = () => {
  return (
    <>
      <Header />
      <div className="wrapper-container">
        <DarkMode />
        <Hero />
        <Summary />
        <Skills />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Portfolio;
