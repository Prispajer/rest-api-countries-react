import React from "react";
import Options from "../components/Options";
import Navbar from "../components/Navbar";
import ShowAllCountries from "../components/ShowAllCountries";

export default function AllCountries() {
  const [inputValue, setInputValue] = React.useState("");
  const [debouncedValue, setDebouncedValue] = React.useState(inputValue);

  return (
    <>
      <Navbar />
      <Options
        inputValue={inputValue}
        setInputValue={setInputValue}
        debouncedValue={debouncedValue}
        setDebouncedValue={setDebouncedValue}
      />
      <ShowAllCountries inputValue={debouncedValue} />
    </>
  );
}
