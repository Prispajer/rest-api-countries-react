import React from "react";
import Navbar from "../components/Navbar";
import SelectCountry from "../components/SelectCountry";

export default function SpecificCountry({
  countries,
  setCountries,
  isLoading,
  setIsLoading,
  switchTheme,
  toggleTheme,
}) {
  const [specificCountry, setSpecificCountry] = React.useState([]);
  return (
    <>
      <Navbar toggleTheme={toggleTheme} switchTheme={switchTheme} />
      <SelectCountry
        countries={countries}
        setCountries={setCountries}
        specificCountry={specificCountry}
        setSpecificCountry={setSpecificCountry}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        toggleTheme={toggleTheme}
        switchTheme={switchTheme}
      />
    </>
  );
}
