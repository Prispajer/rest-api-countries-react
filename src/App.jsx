import React from "react";
import AllCountries from "./pages/AllCountries";
import SpecificCountry from "./pages/SpecificCountry";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const Context = React.createContext();

function App() {
  const [countries, setCountries] = React.useState([]);
  const [switchTheme, setSwitchTheme] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);

  function toggleTheme() {
    setSwitchTheme((prevTheme) => !prevTheme);
  }

  const contextValues = {
    countries,
    setCountries,
    switchTheme,
    setSwitchTheme,
    isLoading,
    setIsLoading,
    toggleTheme,
  };

  return (
    <Context.Provider value={contextValues}>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<AllCountries countries={countries} />} />
            <Route
              path="/specificCountry/:countryName"
              element={<SpecificCountry />}
            />
          </Routes>
        </Router>
      </main>
    </Context.Provider>
  );
}

export default App;
