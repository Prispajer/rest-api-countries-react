import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch as solidSearch,
  faArrowDown,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";

export default function Options({
  inputValue,
  setInputValue,
  filterByRegion,
  setFilteredRegions,
  countries,
  setDebouncedValue,
  switchTheme,
}) {
  const [showDropDown, setshowDropDown] = React.useState(false);
  const [selectedRegion, setSelectedRegion] = React.useState(null); // Dodany stan dla wybranej opcji

  function toggleDropDown() {
    setshowDropDown((prevDropDown) => !prevDropDown);
  }

  function useDebounce(value, delay) {
    React.useEffect(() => {
      let timeOutId;
      timeOutId = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(timeOutId);
      };
    }, [value, delay]);
  }

  useDebounce(inputValue, 1000);

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleSelectRegion(region) {
    setSelectedRegion(region);
    filterByRegion(region);
    setshowDropDown(true);
  }

  return (
    <section className={switchTheme ? "options" : "options__dark"}>
      <div
        className={
          switchTheme ? "options__search-bar" : "options__search-bar__dark"
        }
      >
        <FontAwesomeIcon className="options__search-icon" icon={solidSearch} />
        <input
          placeholder="Search for a country..."
          onChange={handleChange}
          value={inputValue}
          type="text"
          className={switchTheme ? "options__input" : "options__input__dark"}
        />
      </div>
      <div onClick={toggleDropDown} className="options__dropdown">
        <div
          className={
            switchTheme
              ? "options__dropdown-toggle"
              : "options__dropdown-toggle__dark"
          }
        >
          {selectedRegion ? selectedRegion : "Filter by Region"}{" "}
          <FontAwesomeIcon icon={showDropDown ? faArrowUp : faArrowDown} />
        </div>
        <div
          className={
            showDropDown
              ? "options__dropdown-menu"
              : "options__dropdown-menu__closed"
          }
        >
          <button
            onClick={() => setFilteredRegions(countries)}
            className="options__select-menu"
          >
            All
          </button>
          <button
            onClick={() => handleSelectRegion("Africa")}
            className="options__select-menu"
          >
            Africa
          </button>
          <button
            onClick={() => handleSelectRegion("Americas")}
            className="options__select-menu"
          >
            Americas
          </button>
          <button
            onClick={() => handleSelectRegion("Asia")}
            className="options__select-menu"
          >
            Asia
          </button>
          <button
            onClick={() => handleSelectRegion("Europe")}
            className="options__select-menu"
          >
            Europe
          </button>
          <button
            onClick={() => handleSelectRegion("Oceania")}
            className="options__select-menu"
          >
            Oceania
          </button>
        </div>
      </div>
    </section>
  );
}
