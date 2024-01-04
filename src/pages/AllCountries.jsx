import React from "react";
import Options from "../components/Options";
import Navbar from "../components/Navbar";
import ShowAllCountries from "../components/ShowAllCountries";

export default function AllCountries({ toggleTheme, switchTheme }) {
  const [inputValue, setInputValue] = React.useState("");
  const [debouncedValue, setDebouncedValue] = React.useState(inputValue);
  const [countries, setCountries] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [filteredRegions, setFilteredRegions] = React.useState([]);

  function filterByRegion(region) {
    const filteredCountries = countries.filter(
      (country) => country.region === region
    );
    setFilteredRegions(filteredCountries);
  }

  return (
    <>
      <Navbar toggleTheme={toggleTheme} switchTheme={switchTheme} />
      <Options
        inputValue={inputValue}
        setInputValue={setInputValue}
        debouncedValue={debouncedValue}
        setDebouncedValue={setDebouncedValue}
        countries={countries}
        filterByRegion={filterByRegion}
        setCountries={setCountries}
        filteredRegions={filteredRegions}
        setFilteredRegions={setFilteredRegions}
        switchTheme={switchTheme}
      />
      <ShowAllCountries
        filterByRegion={filterByRegion}
        filteredRegions={filteredRegions}
        setFilteredRegions={setFilteredRegions}
        countries={countries}
        setCountries={setCountries}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        debouncedValue={debouncedValue}
        switchTheme={switchTheme}
      />
    </>
  );
}
