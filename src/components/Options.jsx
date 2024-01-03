import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch as solidSearch } from "@fortawesome/free-solid-svg-icons";

export default function Options({
  inputValue,
  setInputValue,
  debouncedValue,
  setDebouncedValue,
  switchTheme,
}) {
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

    return debouncedValue;
  }

  useDebounce(inputValue, 1000);

  function handleChange(event) {
    setInputValue(event.target.value);
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
      <div className="options__select-bar">
        <select
          className={
            switchTheme ? "options__select-menu" : "options__select-menu__dark"
          }
          name=""
          id=""
        >
          <option value="">Filter by Region</option>
          <option value="">Africa</option>
          <option value="">America</option>
          <option value="">Asia</option>
          <option value="">Europe</option>
          <option value="">Oceania</option>
        </select>
      </div>
    </section>
  );
}
