import React from "react";
import Navbar from "../components/Navbar";
import Options from "../components/Options";
import ShowAllCountries from "../components/ShowAllCountries";

export default function AllCountries() {
  const [selectedRegion, setSelectedRegion] = React.useState("");
  const [clickedRegion, setClickedRegion] = React.useState([]);

  const handleChange = (event) => {
    let change = event.target.value;
    console.log(change);
    setSelectedRegion(change);
  };

  const clickEvent = (event) => {
    let change = event.target.value;
    console.log(change);
    setClickedRegion(change);
  };

  return (
    <>
      <Navbar />
      <Options changeValue={handleChange} />
      <ShowAllCountries changeClick={clickEvent} />
    </>
  );
}
