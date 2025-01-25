import React from "react";
import { Link } from "react-router-dom";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as regularMoon } from "@fortawesome/free-regular-svg-icons";
import { faMoon as solidMoon } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../context/ContextProvider";
import { toggleTheme } from "../utils/utils";

export default function Navbar() {
  const { switchTheme, setSwitchTheme } = React.useContext(Context);

  return (
    <nav className={switchTheme ? "navbar" : "navbar__dark"}>
      <Link to="/">
        <h1 className="navbar__header">Where in the world?</h1>
      </Link>
      <div
        onClick={() => toggleTheme(setSwitchTheme)}
        className="navbar__theme"
      >
        <FontAwesomeIcon
          className="navbar__moon-icon"
          icon={
            switchTheme ? (regularMoon as IconProp) : (solidMoon as IconProp)
          }
        />
        <span className="navbar__switch-theme">
          {switchTheme ? "Dark Mode" : "Light Mode"}
        </span>
      </div>
    </nav>
  );
}
