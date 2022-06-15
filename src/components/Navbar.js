import reactLogo from "../images/React-icon.svg.png"

export const Navbar = (props) => {

  return(
    <nav className={props.darkMode ? "dark" : ""}>
      <img className="nav-logo" src={reactLogo} 
      alt="logo-react"/>
      <h2 className="logo-text">ReactFacts</h2>
      {/* <h3 className="nav-title">React Course - Project 1</h3> */}
      <section className="nav-slide">
        <p className="text-1">Light</p>
        <label className="slider--nav-bar">
          <input
            type="checkbox"
            checked={props.prevDarkMode}
            onChange={props.toggleDarkMode}
          />
          <span className="slider--round"></span>
        </label>
        <p className="text-2">Dark</p>
      </section>
    </nav>
)}