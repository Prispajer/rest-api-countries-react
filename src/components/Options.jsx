import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch as solidSearch } from "@fortawesome/free-solid-svg-icons";

export default function Options({ changeValue }) {
  return (
    <section className="options">
      <div className="options__search-bar">
        <FontAwesomeIcon className="options__search-icon" icon={solidSearch} />
        <input
          onChange={changeValue}
          placeholder="Search for a country..."
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
