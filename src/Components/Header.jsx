const Header = () => {
  return (
    <>
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
                <a href="#Home">Home </a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            {/* <!------->
          <!--Hamburger Menu--> */}
            <label for="menu">
              <i className="fa-solid fa-bars"></i>
            </label>
            <input type="checkbox" id="menu" />

            <div className="side-menu">
              <ul className="flex-container side-nav-items">
                <li>
                  <a href="#Home">Home </a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            {/* <!-------------> */}
          </div>
        </nav>
      </header>
      <input type="checkbox" id="dark-mode" />
    </>
  );
};

export default Header;
