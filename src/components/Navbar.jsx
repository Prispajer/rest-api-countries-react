import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as regularMoon } from "@fortawesome/free-regular-svg-icons";
// import { faMoon as solidMoon } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar__header">Where in the world?</h1>
      <div className="navbar__theme">
        <FontAwesomeIcon className="navbar__moon-icon" icon={regularMoon} />
        <span className="navbar__switch-theme navbar__switch-theme--darkMode">
          Dark Mode
        </span>
      </div>
    </nav>
  );
}
