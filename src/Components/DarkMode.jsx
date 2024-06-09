const DarkMode = () => {
  return (
    <>
      <input type="checkbox" id="dark-mode" />
      <label htmlFor="dark-mode" className="dark-mode-toggle">
        <i className="fa-solid fa-circle-half-stroke"></i>
      </label>
    </>
  );
};

export default DarkMode;
