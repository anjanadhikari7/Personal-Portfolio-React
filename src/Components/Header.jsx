import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="flex-container nav-bar">
          {/* <!-- Logo Section -->  */}
          <div className="flex-container logo-container">
            <div className="logo-name">Anjan</div>
            <div className="line">|</div>
            <div>Soft.Engineer</div>
          </div>
          {/* <!-- Nav Items --> */}
          <ul className="flex-container nav-items">
            <li>
              <Link to="/Home">Home </Link>
            </li>
            <li>
              <Link to="/skills">Skills </Link>
            </li>
            <li>
              <Link to="/project">Project </Link>
            </li>
            <li>
              <Link to="/about">About </Link>
            </li>
            <li>
              <Link to="/contact">Contact </Link>
            </li>
          </ul>
          {/* <!------->
  <!--Hamburger Menu--> */}
          <label htmlFor="menu">
            <i className="fa-solid fa-bars"></i>
          </label>
          <input type="checkbox" id="menu" />

          <div className="side-menu">
            <ul className="flex-container side-nav-items">
              <li>
                <Link to="/Home">Home </Link>
              </li>
              <li>
                <Link to="/skills">Skills </Link>
              </li>
              <li>
                <Link to="/project">Project </Link>
              </li>
              <li>
                <Link to="/about">About </Link>
              </li>
              <li>
                <Link to="/contact">Contact </Link>
              </li>
            </ul>
          </div>
          {/* <!-------------> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
