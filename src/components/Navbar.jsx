import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as regularMoon } from "@fortawesome/free-regular-svg-icons";
import { faMoon as solidMoon } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Navbar({ switchTheme, toggleTheme }) {
  return (
    <nav className={switchTheme ? "navbar" : "navbar__dark"}>
      <Link to="/">
        <h1 className="navbar__header">Where in the world?</h1>
      </Link>
      <div onClick={toggleTheme} className="navbar__theme">
        <FontAwesomeIcon
          className="navbar__moon-icon"
          icon={switchTheme ? regularMoon : solidMoon}
        />
        <span className="navbar__switch-theme">
          {switchTheme ? "Dark Mode" : "Light Mode"}
        </span>
      </div>
    </nav>
  );
}
