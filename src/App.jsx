import React from "react";
import AllCountries from "./pages/AllCountries";
import SpecificCountry from "./pages/SpecificCountry";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/main.scss";

function App() {
  const [countries, setCountries] = React.useState([]);
  const [switchTheme, setSwitchTheme] = React.useState(true);

  function toggleTheme() {
    setSwitchTheme((prevTheme) => !prevTheme);
  }
  return (
    <main>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <AllCountries
                countries={countries}
                setCountries={setCountries}
                toggleTheme={toggleTheme}
                switchTheme={switchTheme}
              />
            }
          />
          <Route
            path="/specificCountry/:countryName"
            element={
              <SpecificCountry
                countries={countries}
                setCountries={setCountries}
                toggleTheme={toggleTheme}
                switchTheme={switchTheme}
              />
            }
          />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
