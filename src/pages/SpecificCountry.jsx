import Navbar from "../components/Navbar";
import SelectCountry from "../components/SelectCountry";
import { Link } from "react-router-dom";

export default function SpecificCountry() {
  return (
    <div>
      <Navbar />
      <SelectCountry />
    </div>
  );
}
