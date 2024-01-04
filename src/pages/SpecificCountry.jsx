import React from "react";
import Navbar from "../components/Navbar";
import SelectCountry from "../components/SelectCountry";

export default function SpecificCountry({ toggleTheme, switchTheme }) {
  const [specificCountry, setSpecificCountry] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  return (
    <>
      <Navbar toggleTheme={toggleTheme} switchTheme={switchTheme} />
      <SelectCountry
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
