import React from "react";
import Options from "../components/Options";
import Navbar from "../components/Navbar";
import ShowAllCountries from "../components/ShowAllCountries";

export default function AllCountries() {
  const [searchResult, setSearchResult] = React.useState("");

  const debounce = (callback, delay = 1000) => {
    let interval;
    return (...args) => {
      if (interval) {
        clearTimeout(interval);
      } else {
        interval = setTimeout(() => {
          callback.apply(null, args);
        }, delay);
      }
    };
  };

  const handleChange = (country) => {
    setSearchResult(country);
  };
  return (
    <>
      <Navbar />
      <Options handleChange={handleChange} debounce={debounce} />
      <ShowAllCountries searchResult={searchResult} />
    </>
  );
}
