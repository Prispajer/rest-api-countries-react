import FilterOptions from "../components/FilterOptions";
import Navbar from "../components/Navbar";
import CountriesContainer from "../components/CountriesContainer";

export default function CountriesPage() {
  return (
    <>
      <Navbar />
      <FilterOptions />
      <CountriesContainer />
    </>
  );
}
