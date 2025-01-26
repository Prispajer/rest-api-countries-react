import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch as solidSearch,
  faArrowDown,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { Context } from "../context/ContextProvider";
import { filterByRegion } from "../utils/data";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { debounce, toggleDropDown } from "../utils/utils";

export default function FilterOptions() {
  const {
    countries,
    switchDropDown,
    setSwitchDropDown,
    selectedRegion,
    setSelectedRegion,
    setFilteredCountries,
    setInputValue,
    switchTheme,
  } = React.useContext(Context);

  const debouncedSetInputValue = React.useMemo(
    () => debounce((value: string) => setInputValue(value), 1000),
    [setInputValue]
  );

  const handleSelectRegion = React.useCallback(
    (region: string) => {
      setSelectedRegion(region);
      if (region === "All") {
        setFilteredCountries(countries);
      } else {
        setFilteredCountries(filterByRegion(countries, region));
      }
    },
    [countries, setFilteredCountries, setSelectedRegion]
  );

  return (
    <section className={switchTheme ? "options" : "options__dark"}>
      <div
        className={
          switchTheme ? "options__search-bar" : "options__search-bar__dark"
        }
      >
        <FontAwesomeIcon
          className="options__search-icon"
          icon={solidSearch as IconProp}
        />
        <input
          placeholder="Search for a country..."
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            debouncedSetInputValue(event.target.value)
          }
          type="text"
          className={switchTheme ? "options__input" : "options__input__dark"}
        />
      </div>
      <div
        onClick={() => toggleDropDown(setSwitchDropDown)}
        className="options__dropdown"
      >
        <div
          className={
            switchTheme
              ? "options__dropdown-toggle"
              : "options__dropdown-toggle__dark"
          }
        >
          {selectedRegion ? selectedRegion : "Filter by Region"}
          <FontAwesomeIcon
            icon={
              switchDropDown
                ? (faArrowDown as IconProp)
                : (faArrowUp as IconProp)
            }
          />
        </div>
        <div
          className={
            switchTheme && !switchDropDown
              ? "options__dropdown-menu"
              : switchDropDown
              ? "options__dropdown-menu__closed"
              : "options__dropdown-menu__dark"
          }
        >
          {["All", "Africa", "Americas", "Asia", "Europe", "Oceania"].map(
            (region) => (
              <button
                key={region}
                onClick={() => handleSelectRegion(region)}
                className={
                  switchTheme
                    ? "options__select-menu__dark"
                    : "options__select-menu"
                }
              >
                {region}
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
}
