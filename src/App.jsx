import React from "react";
import AllCountries from "./pages/AllCountries";
import SpecificCountry from "./pages/SpecificCountry";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [countries, setCountries] = React.useState([]);
  const [switchTheme, setSwitchTheme] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);

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
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                switchTheme={switchTheme}
                toggleTheme={toggleTheme}
              />
            }
          />
          <Route
            path="/specificCountry/:countryName"
            element={
              <SpecificCountry
                countries={countries}
                setCountries={setCountries}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                switchTheme={switchTheme}
                toggleTheme={toggleTheme}
              />
            }
          />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
