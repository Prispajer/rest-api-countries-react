import Navbar from "./components/Navbar";
import Options from "./components/Options";
import AllCountries from "./components/AllCountries";
import SelectedCountry from "./components/SelectedCountry";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/main.scss";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Options />
        <Routes>
          <Route path="/" element={<AllCountries />} />
          <Route path="/country/:countryName" element={<SelectedCountry />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
