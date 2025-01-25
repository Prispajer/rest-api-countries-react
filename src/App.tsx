import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountriesPage from "./pages/CountriesPage";
import CountryPage from "./pages/CountryPage";
import { ContextProvider } from "./context/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<CountriesPage />} />
            <Route path="/country/:countryName" element={<CountryPage />} />
          </Routes>
        </Router>
      </main>
    </ContextProvider>
  );
}

export default App;
