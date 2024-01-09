import React from "react";
import Navbar from "../components/Navbar";
import SelectCountry from "../components/SelectCountry";

export default function SpecificCountry() {
  const [specificCountry, setSpecificCountry] = React.useState([]);

  return (
    <>
      <Navbar />
      <SelectCountry
        specificCountry={specificCountry}
        setSpecificCountry={setSpecificCountry}
      />
    </>
  );
}
