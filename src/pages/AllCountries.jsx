import Navbar from "../components/Navbar";
import Options from "../components/Options";
import ShowAllCountries from "../components/ShowAllCountries";
import { Link } from "react-router-dom";

export default function AllCountries() {
  return (
    <div>
      <Navbar />
      <Options />
      <ShowAllCountries />
    </div>
  );
}
