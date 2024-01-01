import AllCountries from "./pages/AllCountries";
import SpecificCountry from "./pages/SpecificCountry";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/main.scss";

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<AllCountries />} />
          <Route
            path="/specificCountry/:countryName"
            element={<SpecificCountry />}
          />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
