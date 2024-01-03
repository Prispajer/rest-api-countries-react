import React from "react";
import Options from "../components/Options";
import Navbar from "../components/Navbar";
import ShowAllCountries from "../components/ShowAllCountries";

export default function AllCountries({ toggleTheme, switchTheme }) {
  const [inputValue, setInputValue] = React.useState("");
  const [debouncedValue, setDebouncedValue] = React.useState(inputValue);

  return (
    <>
      <Navbar toggleTheme={toggleTheme} switchTheme={switchTheme} />
      <Options
        inputValue={inputValue}
        setInputValue={setInputValue}
        debouncedValue={debouncedValue}
        setDebouncedValue={setDebouncedValue}
        switchTheme={switchTheme}
      />
      <ShowAllCountries
        debouncedValue={debouncedValue}
        switchTheme={switchTheme}
      />
    </>
  );
}
