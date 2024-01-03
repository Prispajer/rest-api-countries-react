import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch as solidSearch } from "@fortawesome/free-solid-svg-icons";

export default function Options({
  inputValue,
  setInputValue,
  debouncedValue,
  setDebouncedValue,
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

  const debouncedSearchValue = useDebounce(inputValue, 1000);

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <section className="options">
      <div className="options__search-bar">
        <FontAwesomeIcon className="options__search-icon" icon={solidSearch} />
        <input
          placeholder="Search for a country..."
          onChange={handleChange}
          value={inputValue}
          type="text"
          className="options__input"
        />
      </div>
      <div className="options__select-bar">
        <select className="options__select-menu" name="" id="">
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
