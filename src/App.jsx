import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Portfolio from "./Components/Portfolio";
import HomePage from "./pages/Home";
import SkillsPage from "./pages/Skills";
import ProjectsPage from "./pages/Projects";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import Header from "./Components/Header";
import DarkMode from "./Components/DarkMode";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="wrapper-container">
        <DarkMode />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/project" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
