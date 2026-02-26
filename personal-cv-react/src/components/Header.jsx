function Header({ darkMode, setDarkMode }) {
  return (
    <header className="card">
      <h1>Kurt John L. Baterbonia</h1>
      <p>IT Student | Web Developer</p>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}

export default Header;