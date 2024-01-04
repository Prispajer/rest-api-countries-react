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
  const [showDropDown, setshowDropDown] = React.useState(true);
  const [selectedRegion, setSelectedRegion] = React.useState(null);

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
          {selectedRegion ? selectedRegion : "Filter by Region"}
          <FontAwesomeIcon icon={showDropDown ? faArrowDown : faArrowUp} />
        </div>
        <div
          className={
            switchTheme && !showDropDown
              ? "options__dropdown-menu "
              : showDropDown
              ? "options__dropdown-menu__closed"
              : "options__dropdown-menu__dark"
          }
        >
          <button
            onClick={() => setFilteredRegions(countries)}
            className={
              switchTheme
                ? "options__select-menu"
                : "options__select-menu__dark"
            }
          >
            All
          </button>
          <button
            onClick={() => handleSelectRegion("Africa")}
            className={
              switchTheme
                ? "options__select-menu"
                : "options__select-menu__dark"
            }
          >
            Africa
          </button>
          <button
            onClick={() => handleSelectRegion("Americas")}
            className={
              switchTheme
                ? "options__select-menu"
                : "options__select-menu__dark"
            }
          >
            Americas
          </button>
          <button
            onClick={() => handleSelectRegion("Asia")}
            className={
              switchTheme
                ? "options__select-menu"
                : "options__select-menu__dark"
            }
          >
            Asia
          </button>
          <button
            onClick={() => handleSelectRegion("Europe")}
            className={
              switchTheme
                ? "options__select-menu"
                : "options__select-menu__dark"
            }
          >
            Europe
          </button>
          <button
            onClick={() => handleSelectRegion("Oceania")}
            className={
              switchTheme
                ? "options__select-menu"
                : "options__select-menu__dark"
            }
          >
            Oceania
          </button>
        </div>
      </div>
    </section>
  );
}
