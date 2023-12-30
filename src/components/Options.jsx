import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch as regularSearch } from "@fortawesome/free-regular-svg-icons";

export default function Options() {
  return (
    <section className="options">
      <div className="options__search-bar">
        <FontAwesomeIcon icon={regularSearch} />
      </div>
    </section>
  );
}
