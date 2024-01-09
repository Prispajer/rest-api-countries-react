import React from "react";
import Options from "../components/Options";
import Navbar from "../components/Navbar";
import ShowAllCountries from "../components/ShowAllCountries";

export default function AllCountries({ countries }) {
  const [inputValue, setInputValue] = React.useState("");
  const [debouncedValue, setDebouncedValue] = React.useState(inputValue);
  const [filteredRegions, setFilteredRegions] = React.useState([]);

  function filterByRegion(region) {
    const filteredCountries = countries.filter(
      (country) => country.region === region
    );
    setFilteredRegions(filteredCountries);
  }

  return (
    <>
      <Navbar />
      <Options
        inputValue={inputValue}
        setInputValue={setInputValue}
        debouncedValue={debouncedValue}
        setDebouncedValue={setDebouncedValue}
        filteredRegions={filteredRegions}
        setFilteredRegions={setFilteredRegions}
        filterByRegion={filterByRegion}
      />
      <ShowAllCountries
        filteredRegions={filteredRegions}
        setFilteredRegions={setFilteredRegions}
        debouncedValue={debouncedValue}
        filterByRegion={filterByRegion}
      />
    </>
  );
}
